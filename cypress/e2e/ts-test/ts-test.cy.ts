describe("login page", () => {
    it("should visit login page", () => {
        cy.visit("www.google.com");
        cy.get("#APjFqb").type("something");
    });
});
