/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
(function() {

    var BDT = window.BDT;

    BDT.dataMap = {
        // Maps our vardefs fields with the faker.js function to use to generate
        // a value.
        fieldNames: {
            first_name: 'name.firstName',
            last_name: 'name.lastName',
            salutation: 'name.prefix',
            title: 'name.jobTitle',
            name: 'name.findName',

            billing_address_city: 'address.city',
            billing_address_country: 'address.country',
            billing_address_postalcode: 'address.zipCode',
            billing_address_state: 'address.state',
            billing_address_street: 'address.streetAddress',
            primary_address_city: 'address.city',
            primary_address_country: 'address.country',
            primary_address_postalcode: 'address.zipCode',
            primary_address_state: 'address.state',
            primary_address_street: 'address.streetAddress',
            alt_address_street: 'address.streetAddress',
            shipping_address_city: 'address.city',
            shipping_address_country: 'address.country',
            shipping_address_postalcode: 'address.zipCode',
            shipping_address_state: 'address.state',
            shipping_address_street: 'address.streetAddress',
            department: 'lorem.word',
            date_end: 'date.future',
            date_start: 'date.future',
            exp_date: 'date.future',
            repeat_until: 'date.future',

            facebook: 'internet.userName',
            twitter: 'internet.userName',
            googleplus: 'internet.userName',

            description: 'lorem.paragraph'
        },
        // Maps our field types to the faker.js function to use to generate
        // a value. If the field to populate is not in the `fieldNames` list above,
        // we will fallback to this mapping.
        fieldTypes: {
            phone: 'phone.phoneNumberFormat',
            datetime: 'date.recent',
            date: 'date.past',
            text: 'lorem.words',
            bool: 'random.boolean',
            int: 'random.number',
            url: 'internet.url',
            //email: 'internet.exampleEmail'

            // enums
            //salutation: '',
            //preferred_language

        },
        // This hold a list of field names that should not be populated, even if
        // the field type has a mapping.
        blackList: {
            //Common fields
            deleted: true,
            mkto_id: true,
            mkto_sync: true,

            //Person type fields
            mkto_lead_score: true,

            //Contacts fields
            sync_contact: true,
            portal_active: true,

            //Accounts fields
            invalid_email: true,

            //Leads fields
            webtolead_invalid_email: true,
            account_name: true,
            account_description: true,

            //Cases fields
            system_id: true,
            case_number: true,

            //KBContents
            viewcount: true
        },
        // List of field/value pairs. This will set the given value for the
        // corresponding field. Useful when we don't want to generate a random
        // value (For example if faker.js doesn't provide a right function for
        // a such field.)
        fixedValues: {
            KBContents: {
                revision: '1'
            }
        }
    }
})();
