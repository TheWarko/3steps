describe("Registration Page E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Load page", () => {
    cy.contains("Seminar Registration").should("be.visible");
  });

  const step1 = () => {
    // Fill form
    cy.get("select#numAttendees").select("2");
    cy.get('input[name="name1"]').type("Mario");
    cy.get('input[name="name2"]').type("Rossi");

    // Check Step2 is enabled
    cy.contains("Step 2").should("not.have.attr", "disabled");
  };

  const step2 = () => {
    // Seleziona "Yes" per Company Badge
    cy.get("input#companyBadgeYes").check();
    cy.get("input#companyName").type("My Company");

    // Seleziona "No" per Special Accommodations
    cy.get("input#specialAccomodationNo").check();

    // Verifica che Step 3 sia abilitato
    cy.contains("Step 3").should("not.have.attr", "disabled");
  };

  const step3 = () => {
    // Seleziona "Yes" per "You Rock"
    cy.get("input#youRock").check();

    // Clicca su "Complete Registration"
    cy.get("button").contains("Complete Registration").click();

    // Verifica che il modulo sia stato resettato
    // cy.get("select#numAttendees").should("have.value", "0");
    // cy.get('input[name="name1"]').should("have.value", "");
    // cy.get('input[name="name2"]').should("have.value", "");
  };

  it("Registration", () => {
    step1();
    step2();
    step3();
  });
});
