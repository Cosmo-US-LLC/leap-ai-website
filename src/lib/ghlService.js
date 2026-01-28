/**
 * Simple GHL Form Submission
 * Creates a contact in GHL (which will appear in your CRM)
 */

export async function submitToGHL(formData) {
  const apiKey = import.meta.env.VITE_GHL_API_KEY;
  const locationId = import.meta.env.VITE_GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    throw new Error('GHL API Key and Location ID are required. Please check your .env file.');
  }

  // Format phone number - react-international-phone already provides it in international format (e.g., +1234567890)
  // The phone number should already be in the format +[country code][number]
  // Just ensure it's properly formatted (remove any spaces, keep + and digits)
  let phone = formData.phone || '';
  if (phone) {
    // Remove all non-digit characters except the leading +
    const digits = phone.replace(/\D/g, '');
    phone = '+' + digits;
  }

  // Prepare contact data
  const contactData = {
    locationId: locationId,
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: phone,
    companyName: formData.companyName.trim(),
    tags: ['Website Form', 'Free Report'],
    source: 'Website Form',
  };

  console.log('Submitting to GHL:', { locationId, email: contactData.email, name: contactData.name });

  // Create contact using GHL Contacts API
  const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Version': '2021-07-28',
    },
    body: JSON.stringify(contactData),
  });

  const responseText = await response.text();
  let result = {};
  
  try {
    result = responseText ? JSON.parse(responseText) : {};
  } catch (e) {
    console.warn('Response not JSON:', responseText);
  }

  console.log('GHL Response:', { status: response.status, ok: response.ok, result });

  // Handle duplicate contact error - try to update existing contact
  if (!response.ok && (result.message?.includes('duplicate') || result.message?.includes('duplicated'))) {
    console.log('Duplicate contact detected, searching for existing contact...');
    
    // Search for existing contact by email
    const searchResponse = await fetch('https://services.leadconnectorhq.com/contacts/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: locationId,
        query: { email: contactData.email },
        limit: 1,
      }),
    });

    const searchText = await searchResponse.text();
    let searchResult = {};
    
    try {
      searchResult = searchText ? JSON.parse(searchText) : {};
    } catch (e) {
      console.warn('Search response not JSON:', searchText);
    }

    const contacts = searchResult.contacts || searchResult.data?.contacts || [];
    
    if (contacts.length > 0) {
      const existingContactId = contacts[0].id;
      console.log('Found existing contact, updating:', existingContactId);
      
      // Update existing contact
      const updateResponse = await fetch(`https://services.leadconnectorhq.com/contacts/${existingContactId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify({
          ...contactData,
          tags: [...new Set([...(contacts[0].tags || []), ...contactData.tags])],
        }),
      });

      const updateText = await updateResponse.text();
      let updateResult = {};
      
      try {
        updateResult = updateText ? JSON.parse(updateText) : {};
      } catch (e) {
        console.warn('Update response not JSON:', updateText);
      }

      console.log('Update Response:', { status: updateResponse.status, ok: updateResponse.ok, result: updateResult });

      if (!updateResponse.ok) {
        throw new Error(updateResult.message || updateResult.error || `Update failed: ${updateResponse.status}`);
      }

      console.log('✅ Contact updated successfully in GHL');
      return { success: true, updated: true };
    }
  }
  
  if (!response.ok) {
    let errorMessage = `Submission failed: ${response.status}`;
    if (result.message) {
      errorMessage = result.message;
    } else if (result.error) {
      errorMessage = result.error;
    }
    console.error('GHL Error:', errorMessage);
    throw new Error(errorMessage);
  }

  console.log('✅ Contact created successfully in GHL');
  return { success: true };
}
