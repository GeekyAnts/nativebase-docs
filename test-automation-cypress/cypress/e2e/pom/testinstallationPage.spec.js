
import InstallationNativebase from '../../pages/installationNativeBase.pages';


describe('test elements assertions', () => {

    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit('https://docs.nativebase.io/installation')
    })

    it("Checks for all the elements in installation page",() => {
        InstallationNativebase.installInReactNativeProjectWebHyperlink()
        InstallationNativebase.installInExpoHyperlink()
        InstallationNativebase.installInExpoProject()
        InstallationNativebase.previousBottomButton()
        InstallationNativebase.nextBottomButton()
        InstallationNativebase.clickMadeWithNativeBase()

    })
})