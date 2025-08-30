import { homePage } from "../../pageObjects/homePage"

const home = new homePage();
describe.only('LCW Tüm Ana Menü ve Alt Menü Kontrolü', () => {
 
const baseUrl = 'https://www.lcw.com';
  beforeEach(() => {
    home.navigateToHomePage();
  })

  it('Ana menü ve alt menü linkleri çalışıyor', () => {
    const mainMenuLinks = []

    // Ana menü linklerini topla
    cy.get('.menu-header-item__title').each(($el) => {
      const text = $el.text().trim()
      const href = $el.attr('href')
      if (href) {
        mainMenuLinks.push({ text, href })
      }
    }).then(() => {

      // Ana menü linklerini sırayla kontrol et
      mainMenuLinks.forEach((menu) => {

        cy.log(`Ana Menü: ${menu.text}`)

        // Ana sayfaya git
        cy.visit(baseUrl)

        // Ana menüyü hover yap
        cy.get('.menu-header-item__title')
          .contains(menu.text)
          .trigger('mouseover')

        const subLinks = []

        // Alt menü linklerini topla
        cy.get('.menu-items-container a.link__element').each(($el) => {
          const href = $el.attr('href')
          if (href) {
            subLinks.push(href)
          }
        }).then(() => {

          // Alt linkleri sırayla ziyaret et
          subLinks.forEach((link) => {
            cy.visit(baseUrl + link)
            cy.url().should('include', link)
          })

        })
      })
    })
  })
})
