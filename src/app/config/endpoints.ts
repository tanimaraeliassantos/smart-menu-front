export const endpoints = {
  auth: {
    login: '/auth/login',
    me: '/auth/me',
  },    productos: {
    list: '/producto',   // este es tu "menú"
    one: (id: string) => `/producto/${id}`,
  },
  orders: {
    create: '/pedidos',
    myOrders: '/pedidos/mios',
  },
  service: {
    call: '/servicio/llamar',
  },

};
