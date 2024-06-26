describe('User Login', () => {
 
  const userInfo = {
    username: "",
    email: "",
    password: ""
  }

  it('should allow a visitor to login and logout', () => {
    //Login User
    cy.login(userInfo.email, userInfo.password)
    cy.location('pathname').should('eq', '/cs/onboarding')

    //Onboarding - Step 1
    cy.get('.MuiButtonBase-root.mui-qnuvkl').click() //Lets get started

    cy.get('button[step="1"]').click()  
    cy.wait(1000)

    cy.get('[data-subtestid="inputSubKey"]').clear()
    cy.get('[data-subtestid="inputSubKey"]').type(userInfo.username)
    cy.get('.MuiTypography-h2').should('be.visible')

    cy.get('.MuiButtonBase-root.mui-qnuvkl').click() //Pokračovat
    cy.get('.MuiTypography-root.MuiTypography-h1.mui-y3t3a').should('contain', 'Create or join an organization').and('be.visible') //Title on step 2

    //Logout
    cy.get('.MuiButtonBase-root.mui-96qkv6').click() //Odhlásit
    cy.location('pathname').should('eq', '/cs')
  })  

  it('should error for invalid user', () => {
    cy.login("invalid@email.cz", "invalidPassword")

    cy.get('[role="alert"]').contains('Zadali jste neplatné uživatelské jméno nebo heslo')
  });
})