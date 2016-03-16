angular.module('myApp')
.service('mainSvc', function() {

  var tabs = [
    {
      name: 'Home',
      view: 'home',
    },
    {
      name: 'Groups',
      view: 'groups'
    },
    {
      name: 'Contact',
      view: 'contact',
    },
    {
      name: 'Login/Sign up',
      view: 'login',
    }
  ];

  this.getTabs = function() {
    return tabs;
  };

  var groups = [
    {

      name: 'Contractors',
      description: 'Made for sharing ideas and pictures with and between contractors',
      password: ''

    },{

      name: 'Land Owners',
      description: 'Made for sellers and buyers to communicate',
      password: ''

    },{

      name: 'North Point Development Admin',
      description: 'Made for North Point Development Administrative communication',
      password: ''

    }
  ];
  this.getGroups = function() {
      return groups;
  };

  var contactList = [
    {
      name: 'fa fa-envelope',
      info: 'test@test.com',
      link: 'https://www.facebook.com/northpointdevelopment'
    },{
      name: 'fa fa-phone',
      info: '123-123-1234',
      link: 'https://www.facebook.com/northpointdevelopment'
    },{
      name: 'fa fa-linkedin',
      info: 'test@linkedin.com',
      link: 'https://www.facebook.com/northpointdevelopment'
    },{
      name: 'fa fa-facebook-official',
      info: 'North Point Development',
      link: 'https://www.facebook.com/northpointdevelopment'
    }
  ];

  this.getContactList = function() {
    return contactList;
  };

});
