describe('test connection db', () => {
    it('get data from db', () => {
        cy.task('queryDb', "UPDATE `main_backendless`.`Application` SET `name` = 'MyApp' WHERE (`id` = 'C25DD2A0-8B9A-49F3-8E00-76C4105C5336') and (`zoneId` = '1')")
    })
})