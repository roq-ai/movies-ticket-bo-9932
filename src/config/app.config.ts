interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative'],
  tenantName: 'Cinema',
  applicationName: 'Movies Ticket Booking Online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View movie details', 'View show times', 'Purchase tickets', 'View ticket details'],
  ownerAbilities: [
    'Manage users',
    'Manage cinemas',
    'Manage movies',
    'Manage show times',
    'Manage tickets',
    'Manage team members',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9da09215-ca5e-4017-becb-a947924373ed',
};
