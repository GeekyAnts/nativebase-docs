    /// <reference types="cypress" />

    describe('check all navigation links', () => {

    beforeEach(() => {
        cy.visit('https://docs.nativebase.io')
    })

    it('Horizontal Nav bar Check', () => {   

    //clickInstallation
        cy.xpath('(//*[normalize-space(.)="Installation"])[2]', 'pomrE76gt5SX3QX')
        .click()
    /**
         "NativeBase" Box  > Navigation > "Setup NativeBase Provider" Button
        tag: div | purpose: navigation
    */
        cy.xpath('(//*[normalize-space(.)="Setup NativeBase Provider"])[2]', 'pomg5ijwVPkHdLO')
        .click()
    /**
         "NativeBase" Box  > Navigation > "Contribution" Button
        tag: div | purpose: navigation
    */
        cy.xpath('(//*[normalize-space(.)="Contribution"])[2]', 'pomLoLjKAKbzboj')
        .click()
    /**
         "NativeBase" Box  > Navigation > "Creating a Universal App with NativeBase..." Button
        tag: div | purpose: navigation
    */
    //    cy.xpath("//*[contains(text(), 'Creating a Universal App with NativeBase and Solito')]")
    //     .click()

        cy.get('.css-1dbjc4n:nth-child(1) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) .css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-4rbku5 > .css-1dbjc4n > .css-901oao')
        .click()

    /**
         "NativeBase" Box  > Navigation > "Utility First" Button
        tag: div | purpose: navigation
    */
        cy.xpath('(//*[normalize-space(.)="Utility First"])[2]', 'pom3iGo8cauzHj9')
        .click()

    /**
         "NativeBase" Box  > Navigation > "Utility Props Specificity" Button
        tag: div | purpose: navigation
    */
        cy.xpath('(//*[normalize-space(.)="Utility Props Specificity"])[2]', 'pomMNqHyYfkhGPg')
        .click()

    /**
         "NativeBase" Box  > Navigation > "Design Tokens" Button
        tag: div | purpose: navigation
    */
        cy.xpath('(//*[normalize-space(.)="Design Tokens"])[2]', 'pomMUwxzoRn8hTg')
        .click()


    /**
         "NativeBase" Box  > Navigation > "Pseudo Props: Overview" Button
        tag: div | purpose: navigation
    */
        cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-1dbjc4n:nth-child(5) .css-901oao').click()



    /**
         "NativeBase" Box  > Navigation > "Pseudo Props: Dos & Don'ts" Button
        tag: div | purpose: navigation
    */

        // Click on <div> "Pseudo Props: Dos & Don't..."
        cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-1dbjc4n:nth-child(6) .css-901oao').click();
        
        // Click on <div> "Internal Pseudo Props"
        cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-1dbjc4n:nth-child(7) .css-4rbku5 > .css-1dbjc4n > .css-901oao').click();
        
        // Click on <div> "Responsive"
        cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-1dbjc4n:nth-child(8) .css-901oao').click();
        
        
        // Click on <div> "FEATURES"
        cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(4) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) .css-901oao:nth-child(1)').click();
        
        // Click on <div> "Utility Props"
        cy.get('.css-1dbjc4n:nth-child(4) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();
        
        // Click on <div> "Color mode (Dark Mode)"
        cy.get('.css-1dbjc4n:nth-child(4) > .css-1dbjc4n > .css-1dbjc4n:nth-child(3) .css-901oao').click();
        
        // Click on <div> "NativeBase Factory"
        cy.get('.css-1dbjc4n:nth-child(4) .css-1dbjc4n:nth-child(4) .css-901oao').click();
        
        // Click on <div> "SafeAreaView Props"
        cy.get('.css-1dbjc4n:nth-child(4) .css-1dbjc4n:nth-child(5) .css-901oao').click();
        
        // Click on <div> "Strict Mode"
        cy.get('.css-1dbjc4n:nth-child(4) .css-1dbjc4n:nth-child(6) .css-901oao').click();
        
        // Click on <div> "Accessibility"
        cy.get('.css-1dbjc4n:nth-child(4) .css-1dbjc4n:nth-child(7) .css-901oao').click();
        
        // Click on <div> "Default Theme"
        cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();
        
        // Click on <div> "Customizing Theme"
        cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n:nth-child(3) .css-4rbku5 .css-901oao').click();
        
        // Click on <div> "Customizing Fonts"
        cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n:nth-child(4) .css-901oao').click();
        
        // Click on <div> "Customizing Components"
        cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n:nth-child(5) .css-901oao').click();
        
        // Click on <div> "Making components dark mo..."
        cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n:nth-child(6) .css-901oao').click();
        
        // Click on <div> "Breakpoints"
        cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n:nth-child(7) .css-901oao').click();
        
        // Click on <div> "Using Theme"
        cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n:nth-child(8) .css-901oao').click();
        
        // Click on <div> "TypeScript"
        cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n:nth-child(9) .css-901oao').click();
        
        // Click on <div> "AspectRatio"
        cy.get('.css-1dbjc4n:nth-child(6) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) .css-901oao').click();
        
        
        // Click on <div> "Box"
        cy.get('.css-1dbjc4n:nth-child(6) .css-1dbjc4n:nth-child(3) .css-901oao').click();
        
        // Click on <div> "Center"
        cy.get('.css-1dbjc4n:nth-child(6) .css-1dbjc4n:nth-child(4) .css-901oao').click();
        
        // Click on <div> "Container"
        cy.get('.css-1dbjc4n:nth-child(6) .css-1dbjc4n:nth-child(5) .css-901oao').click();
        
        // Click on <div> "Flex"
        cy.get('.css-1dbjc4n:nth-child(6) .css-1dbjc4n:nth-child(6) .css-901oao').click();
        
        // Click on <div> "HStack / Row"
        cy.get('.css-1dbjc4n:nth-child(6) .css-1dbjc4n:nth-child(7) .css-901oao').click();
        
        // Click on <div> "Stack"
        cy.get('.css-1dbjc4n:nth-child(6) .css-1dbjc4n:nth-child(8) .css-901oao').click();
        
        // Click on <div> "VStack / Column"
        cy.get('.css-1dbjc4n:nth-child(6) .css-1dbjc4n:nth-child(9) .css-901oao').click();
        
        // Click on <div> "ZStack"
        cy.get('.css-1dbjc4n:nth-child(6) .css-1dbjc4n:nth-child(10) .css-901oao').click();
        
        // Press c on body


    /**
         "NativeBase" Box  > Navigation > "Internal Pseudo Props" Button
        tag: div | purpose: navigation
    */
        cy.get('.css-1dbjc4n:nth-child(7) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) .css-901oao').click();

        // Click on <div> "Pressable"
    cy.get('.css-1dbjc4n:nth-child(7) > .css-1dbjc4n > .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "Checkbox"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "FormControl"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(5) .css-901oao').click();

    // Click on <div> "IconButton"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(6) .css-901oao').click();

    // Click on <div> "Input"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(7) .css-901oao').click();

    // Click on <div> "Link"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(8) .css-901oao').click();

    // Click on <div> "Radio"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(9) .css-901oao').click();

    // Click on <div> "Select"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(10) .css-901oao').click();

    // Click on <div> "Slider"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(11) .css-901oao').click();

    // Click on <div> "Switch"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(12) .css-901oao').click();

    // Click on <div> "TextArea"
    cy.get('.css-1dbjc4n:nth-child(7) .css-1dbjc4n:nth-child(13) .css-901oao').click();

    // Click on <div> "Badge"
    cy.get('.css-1dbjc4n:nth-child(8) .css-1dbjc4n:nth-child(2) .css-901oao').click();


    // Click on <div> "Divider"
    cy.get('.css-1dbjc4n:nth-child(8) > .css-1dbjc4n > .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "FEEDBACK"
    cy.get('.css-1dbjc4n:nth-child(1) > .css-1dbjc4n > .css-1dbjc4n:nth-child(9) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-901oao').click();

    // Click on <div> "Alert"
    cy.get('.css-1dbjc4n:nth-child(9) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "Progress"
    cy.get('.css-1dbjc4n:nth-child(9) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "Skeleton"
    cy.get('.css-1dbjc4n:nth-child(9) .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "Spinner"
    cy.get('.css-1dbjc4n:nth-child(9) .css-1dbjc4n:nth-child(5) .css-901oao').click();

    // Click on <div> "Toast"
    cy.get('.css-1dbjc4n:nth-child(9) .css-1dbjc4n:nth-child(6) .css-4rbku5 > .css-1dbjc4n > .css-901oao').click();

    // Click on <div> "Text"
    cy.get('.css-1dbjc4n:nth-child(10) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) .css-4rbku5 .css-901oao').click();

    // Click on <div> "Heading"
    cy.get('.css-1dbjc4n:nth-child(10) > .css-1dbjc4n > .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "AlertDialog"
    cy.get('.css-1dbjc4n:nth-child(11) .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "Menu"
    cy.get('.css-1dbjc4n:nth-child(11) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "Modal"
    cy.get('.css-1dbjc4n:nth-child(11) .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "Popover"
    cy.get('.css-1dbjc4n:nth-child(11) .css-1dbjc4n:nth-child(5) .css-901oao').click();

    // Click on <div> "Tooltip"
    cy.get('.css-1dbjc4n:nth-child(11) .css-1dbjc4n:nth-child(6) .css-901oao').click();

    // Click on <div> "ActionSheet"
    cy.get('.css-1dbjc4n:nth-child(12) > .css-1dbjc4n > .css-1dbjc4n .css-4rbku5 .css-901oao').click();

    // Click on <div> "Avatar"
    cy.get('.css-1dbjc4n:nth-child(13) .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "Icon"
    cy.get('.css-1dbjc4n:nth-child(13) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "Image"
    cy.get('.css-1dbjc4n:nth-child(13) .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "PresenceTransition"
    cy.get('.css-1dbjc4n:nth-child(14) .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "Slide"
    cy.get('.css-1dbjc4n:nth-child(14) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "Stagger"
    cy.get('.css-1dbjc4n:nth-child(14) > .css-1dbjc4n > .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "Fab"
    cy.get('.css-1dbjc4n:nth-child(15) .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "Hidden"
    cy.get('.css-1dbjc4n:nth-child(15) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "ScrollView"
    cy.get('.css-1dbjc4n:nth-child(16) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "View"
    cy.get('.css-1dbjc4n:nth-child(16) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "KeyboardAvoidingView"
    cy.get('.css-1dbjc4n:nth-child(16) .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "StatusBar"
    cy.get('.css-1dbjc4n:nth-child(16) .css-1dbjc4n:nth-child(5) .css-901oao').click();

    // Click on <div> "FlatList"
    cy.get('.css-1dbjc4n:nth-child(16) .css-1dbjc4n:nth-child(6) .css-901oao').click();

    // Click on <div> "SectionList"
    cy.get('.css-1dbjc4n:nth-child(16) .css-1dbjc4n:nth-child(7) .css-901oao').click();

    // Click on <div> "useDisclose"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "useBreakpointValue"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "useClipboard"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "useMediaQuery"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(5) .css-901oao').click();

    // Click on <div> "useTheme"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(6) .css-901oao').click();

    // Click on <div> "useToken"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(7) .css-901oao').click();

    // Click on <div> "useColorMode"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(8) .css-901oao').click();

    // Click on <div> "useColorModeValue"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(9) .css-901oao').click();

    // Click on <div> "useContrastText"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(10) .css-901oao').click();

    // Click on <div> "useAccessibleColors"
    cy.get('.css-1dbjc4n:nth-child(17) .css-1dbjc4n:nth-child(11) .css-901oao').click();

    // Click on <div> "Todo-List"
    cy.get('.css-1dbjc4n:nth-child(18) .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "Kitchen Sink"
    cy.get('.css-1dbjc4n:nth-child(18) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "Designs"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n:nth-child(1) > .css-901oao').click();

    // // Click on <div> "AppBar"
    // cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(1) .css-4rbku5 > .css-1dbjc4n > .css-901oao').click();

    // Click on <div> "Drawer Navigation"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Tab View"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "Swipe List"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(5) > .css-1dbjc4n .css-901oao').click();

    // Click on <div> "Forms"
    cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(1) > .css-901oao').click();

    // Click on <div> "Form with Validation"
    cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(1) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Login/Signup Forms"
    cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "SearchBar"
    cy.get('.css-1dbjc4n:nth-child(3) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(3) .css-4rbku5 .css-901oao').click();

    // Click on <div> "Layout "
    cy.get('.r-13qz1uu:nth-child(4) > .css-1dbjc4n > .r-1loqt21 > .css-1dbjc4n').click();

    // Click on <div> "App Drawer"
    cy.get('.css-1dbjc4n:nth-child(4) .css-1dbjc4n:nth-child(1) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Footer"
    cy.get('.css-1dbjc4n:nth-child(4) > .css-1dbjc4n > .css-1dbjc4n .css-1dbjc4n:nth-child(2) > .css-1dbjc4n .css-901oao').click();

    // Click on <div> "Upgrading to v3"
    cy.get('.css-1dbjc4n:nth-child(20) > .css-1dbjc4n > .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "Upgrading to 3.2.0 from 3..."
    cy.get('.css-1dbjc4n:nth-child(20) > .css-1dbjc4n > .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "Upgrading to 3.4.0 from 3..."
    cy.get('.css-1dbjc4n:nth-child(20) > .css-1dbjc4n > .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "Components Migration"
    cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n:nth-child(1) > .css-901oao').click();

    // Click on <div> "ActionSheet"
    cy.get('.css-1dbjc4n:nth-child(5) .css-1dbjc4n:nth-child(1) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Badge"
    cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n .css-1dbjc4n:nth-child(2) > .css-1dbjc4n .css-901oao').click();

    // Click on <div> "Button"
    cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "Card"
    cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "Checkbox"
    cy.get('.css-1dbjc4n:nth-child(5) > .css-1dbjc4n > .css-1dbjc4n .css-1dbjc4n:nth-child(5) .css-901oao').click();

    // Click on <div> "DatePicker"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(6) .css-901oao').click();

    // Click on <div> "DeckSwiper"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(7) .css-901oao').click();

    // Click on <div> "Drawer"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(8) .css-901oao').click();

    // Click on <div> "FABs"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(9) .css-901oao').click();

    // Click on <div> "FooterTab"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(10) .css-901oao').click();

    // Click on <div> "Form"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(11) .css-901oao').click();

    // Click on <div> "Header"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(12) .css-901oao').click();

    // Click on <div> "Icon"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(13) .css-901oao').click();

    // Click on <div> "Layout"
    cy.get('.css-1dbjc4n:nth-child(14) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Picker"
    cy.get('.css-1dbjc4n:nth-child(15) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Radio Button"
    cy.get('.css-1dbjc4n:nth-child(16) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();
        
    // Click on <div> "Searchbar"
    cy.get('.css-1dbjc4n:nth-child(17) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Segment"
    cy.get('.css-1dbjc4n:nth-child(18) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Spinner"
    cy.get('.css-1dbjc4n:nth-child(19) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "SwipeList"
    cy.get('.css-1dbjc4n:nth-child(20) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Tabs"
    cy.get('.css-1dbjc4n:nth-child(21) > .css-1dbjc4n > .css-4rbku5 .css-901oao').click();

    // Click on <div> "Thumbnail"
    cy.get('.css-1dbjc4n:nth-child(2) > .css-1dbjc4n > .css-1dbjc4n:nth-child(22) .css-901oao').click();

    // Click on <div> "Toast"
    cy.get('.css-1dbjc4n:nth-child(23) .css-901oao').click();

    // Click on <div> "Typography"
    cy.get('.css-1dbjc4n:nth-child(24) .css-901oao').click();

    // Click on <div> "MORE"
    cy.get('.css-1dbjc4n:nth-child(1) > .css-1dbjc4n > .css-1dbjc4n:nth-child(21) > .css-1dbjc4n > .css-1dbjc4n > .css-1dbjc4n > .css-901oao').click();

    // Click on <div> "Changelog"
    cy.get('.css-1dbjc4n:nth-child(21) .css-1dbjc4n:nth-child(2) .css-901oao').click();

    // Click on <div> "Testing"
    cy.get('.css-1dbjc4n:nth-child(21) .css-1dbjc4n:nth-child(3) .css-901oao').click();

    // Click on <div> "FAQ's"
    cy.get('.css-1dbjc4n:nth-child(21) .css-1dbjc4n:nth-child(4) .css-901oao').click();

    // Click on <div> "More Props"
    cy.get('.css-1dbjc4n:nth-child(1) > .css-1dbjc4n > .css-1dbjc4n:nth-child(22) .css-901oao').click();

    })
    })
