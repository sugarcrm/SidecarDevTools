/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
(function() {

    var BDT = window.BDT;
    BDT.generate = {
        // This hold a list of field names that should not be populated, even if
        // the field type has a mapping.
        blackList: [
            //Common fields
            'deleted',
            'mkto_id',
            'mkto_sync',

            //Person type fields
            'mkto_lead_score',

            //Contacts fields
            'sync_contact',
            'portal_active',

            //Accounts fields
            'invalid_email',

            //Leads fields
            'webtolead_invalid_email',
            'account_name',
            'account_description',

            //Cases fields
            'system_id',
            'case_number',

            //KBContents
            'viewcount',
            'revision'
        ],
        dataMap: {
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
            },

            // List of field/value pairs. This will set the given value for the
            // corresponding field. Useful when we don't want to generate a random
            // value (For example if faker.js doesn't provide a right function for
            // a such field.)
            fixedValues: {
                //Example:

                //Tasks: {
                //    description: 'This is an example of a Task.'
                //}
            }
        }
    };
})();
