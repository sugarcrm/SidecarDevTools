/*
 * Copyright (c) 2015 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
 */
(function() {

  var BDT = window.BDT;

  BDT.dataMap = {
    first_name: 'name.firstName',
    last_name: 'name.lastName',
    salutation: 'name.prefix',
    title: 'name.jobTitle',
    name:'name.findName',

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
    shipping_address_city: 'address.city',
    shipping_address_country: 'address.country',
    shipping_address_postalcode: 'address.zipCode',
    shipping_address_state: 'address.state',
    shipping_address_street: 'address.streetAddress',

    phone_office: 'phone.phoneNumberFormat',
    phone_mobile: 'phone.phoneNumberFormat',
    phone_work: 'phone.phoneNumberFormat',
    website: 'internet.url'
  }
})();
