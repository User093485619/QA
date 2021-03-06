context("TestMVP", () => {
  // приложение должно открыться по адресу: https://finance.dev.fabrique.studio/accounts/login/
  it("приложение должно открыться по адресу: https://finance.dev.fabrique.studio/accounts/login/", () => {
    
  cy.visit("https://finance.dev.fabrique.studio/accounts/login/");
    cy.get("[type='email']").type('admin@admin.ad'); //Почтовый адрес 
    cy.get("[type='email']").should('have.value', 'admin@admin.ad') //проверяем форму email
      cy.get("[type='password']").type('admin'); //Пароль
      cy.get("[type='password']").should('have.value', 'admin') //Проверка поля пароль
      cy.get('button',).click()
      cy.wait(2000)
  });
});

context("TestMVP", () =>{
  it("Переход по ссылке Редактирование платежа. Приложение должно открыться по адресу: https://finance.dev.fabrique.studio/payments/edit/", () => {
    cy.wait(2000)  
  cy.visit("https://finance.dev.fabrique.studio/payments/edit/");
    
    
  });
});