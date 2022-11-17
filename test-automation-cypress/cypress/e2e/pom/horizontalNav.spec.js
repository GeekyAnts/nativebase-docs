    describe('test navigation header elements assertions', () => {

    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit('https://docs.nativebase.io')
    })

    const menuItem = [
        'next',
        '3.4.x',
        '3.3.x',
        '3.2.x',
        '3.1.x',
        '3.0.x'

    ]

    it("Validates all the above mentionedd menu items are present in the drop down", () =>{ 
      cy.get('#react-aria-3').click()
         cy.get("[role='menuitem']").as("MenuItem")
         cy.get('@MenuItem').each((item,index,list) => {
             cy.wrap(item).should('contain.text',menuItem[index])
         })
 
         })
 
    it.only('Check Horizontal Nav Header', () => {

    //VALIDATE NATIVEBASE LOGO IS VISIBLE OR NOT
    //cy.xpath("(//img[@alt='Nativebase logo'])[1]")
    // //VALIDATE NATIVEBASE VERSION IS VISIBLE OR NOT
    // cy.get('#react-aria-3').should('include.text', '3.4.x')

    // //VALIDATE DROPDOWN NEXT TO VERSION IS VISIBLE OR NOT
    cy.xpath("//*[name()='svg'][@class='r-1b5dq1b r-19uokag r-104ivgm']")

    // //VALIDATE ANNOUNCEMENT IS VISIBLE OR NOT
    cy.get('a>.r-cygvgh').should('include.text', 'Announcing NativeBase Startup+ bundle 🎉')
    .click()
    cy.go('back')


    // //VALIDATE SEARCH BOX IS VISIBLE OR NOT
    cy.xpath('(//*[contains(text(),"Search")])[2]').should('include.text', 'Search')
    .click()
    cy.reload();


    //  //VALIDATE FIGMA IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[2]").should('include.text', '')
    // .click()
    // cy.closeTab();

    // //VALIDATE GITHUB IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[3]").should('include.text', '')
    // .click()
    // cy.closeTab();


    // //VALIDATE DISCORD IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[4]").should('include.text', '')
    // .click()
    // cy.closeTab()

    // //VALIDATE DARK/LIGHT MODE BUTTON IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[5]").should('include.text', '')
    .click()
    .click()

    // //VALIDATE HIREUS IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[6]").should('include.text', 'Hire us')
    .click()
    cy.go('back')
     })
    })




/****
export default class GettingStartedNativebasePOM {

  visit() {
    cy.visit('https://docs.nativebase.io/')
  }

/**
    "NativeBase" Box  > Navigation > "NativeBase" Button
    tag: a | purpose: navigation
  *
    clickNativeBase() {
        return cy.get('(//*[normalize-space(.)="NativeBase"])[1]', 'pom1dolle7NWAa9')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "3.4.x" Button
        id: react-aria-3 | tag: div | purpose: navigation
      *
      click34X() {
        return cy.get('#react-aria-3', 'pomKVX5MTDnF3MY')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Announcing NativeBase Startup+ bundle 🎉" Button
        href: ?utm_source={paramValue}&utm_medium={paramValue}&u | tag: a | purpose: navigation
      *
      clickVml6kc1457kyg() {
        return cy.get('//*[@href="https://startup.nativebase.io?utm_source=direct&utm_medium=banner&utm_campaign=nb_docs"]', 'pomhgjD6rxw2PoH')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Search" Button
        tag: div | purpose: navigation
    *
      clickSearchK() {
        return cy.get('(//*[contains(text(),"Search")])[0]', 'pomcpvdulpARr55')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > IconButton
        href: /@nativebase?utm_source={id}&utm_medium={paramValu | tag: a | purpose: navigation
      *
      clickButton2() {
        return cy.get('(//*[@href="https://www.figma.com/@nativebase?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_figma"])[1]', 'pomHhHl84pps6NF')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > IconButton
        href: /GeekyAnts/nativebase | tag: a | purpose: navigation
      *
      clickButton3() {
        return cy.get('(//*[@href="https://github.com/GeekyAnts/nativebase"])[1]', 'pomoiX1bknE3qk4')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > IconButton
        href: /discord | tag: a | purpose: navigation
      *
      clickButton4() {
        return cy.get('(//*[@href="/discord"])[1]', 'pomfCsAm6DXdPez')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > IconButton
        tag: div | purpose: navigation | class: r-lrvibr
      *
      clickButton5() {
        return cy.get('(//*[@role="button"])[1]', 'pomqP3KJynp7Vhh')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Hire us" Button
        href: /hire?utm_source={paramValue}&utm_medium={paramVal | tag: a | purpose: navigation
      *
      clickHireUs() {
        return cy.get('(//*[normalize-space(.)="Hire us"])[1]', 'pomBiY4CtpMMsze')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Input" Button
        tag: div | purpose: navigation
      *
      clickInput() {
        return cy.get('(//*[normalize-space(.)="Input"])[2]', 'pomMZ6vl49yN4w2')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Link" Button
        tag: div | purpose: navigation
      *
      clickLink() {
        return cy.get('(//*[normalize-space(.)="Link"])[2]', 'pomyHLhKLWLGBjm')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Radio" Button
        tag: div | purpose: navigation
      *
      clickRadio() {
        return cy.get('(//*[normalize-space(.)="Radio"])[2]', 'pomKM84U9VvUBD2')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Select" Button
        tag: div | purpose: navigation
      *
      clickSelect() {
        return cy.get('(//*[normalize-space(.)="Select"])[2]', 'pomi2z7i7KcJfYZ')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Slider" Button
        tag: div | purpose: navigation
      *
      clickSlider() {
        return cy.get('(//*[normalize-space(.)="Slider"])[2]', 'pomiq34LsjNZxdL')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Switch" Button
        tag: div | purpose: navigation
      *
      clickSwitch() {
        return cy.get('(//*[normalize-space(.)="Switch"])[2]', 'pommlgnJfLhOEbR')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "TextArea" Button
        tag: div | purpose: navigation
      *
      clickTextArea() {
        return cy.get('(//*[normalize-space(.)="TextArea"])[2]', 'pomk9hGhNHsVmv1')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Badge" Button
        tag: div | purpose: navigation
      *
      clickBadge2() {
        return cy.get('(//*[normalize-space(.)="Badge"])[2]', 'pomj2xBveeDEIOx')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Divider" Button
        tag: div | purpose: navigation
      *
      clickDivider() {
        return cy.get('(//*[normalize-space(.)="Divider"])[2]', 'pomXacFEjd1HvTK')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Alert" Button
        tag: div | purpose: navigation
      *
      clickAlert() {
        return cy.get('(//*[normalize-space(.)="Alert"])[2]', 'pomBGxVdhDAp9YR')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Progress" Button
        tag: div | purpose: navigation
      *
      clickProgress() {
        return cy.get('(//*[normalize-space(.)="Progress"])[2]', 'pomeBah711mWB99')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Skeleton" Button
        tag: div | purpose: navigation
      *
      clickSkeleton() {
        return cy.get('(//*[normalize-space(.)="Skeleton"])[2]', 'pom5UNFT5PGul5M')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Spinner" Button
        tag: div | purpose: navigation
      *
      clickSpinner2() {
        return cy.get('(//*[normalize-space(.)="Spinner"])[2]', 'pomDzxno25e5CCz')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Toast" Button
        tag: div | purpose: navigation
      *
      clickToastUpdate() {
        return cy.get('(//*[contains(text(),"Toast")])[0]', 'pomwx6EbnCxiMmP')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Text" Button
        tag: div | purpose: navigation
      *
      clickText() {
        return cy.get('(//*[normalize-space(.)="Text"])[2]', 'pomldw169eVbABa')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Heading" Button
        tag: div | purpose: navigation
      *
      clickHeading() {
        return cy.get('(//*[normalize-space(.)="Heading"])[2]', 'pom67ZEiebs4DlQ')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "AlertDialog" Button
        tag: div | purpose: navigation
      *
      clickAlertDialog() {
        return cy.get('(//*[normalize-space(.)="AlertDialog"])[2]', 'pomgnruCnwTbF13')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Menu" Button
        tag: div | purpose: navigation
      *
      clickMenu() {
        return cy.get('(//*[normalize-space(.)="Menu"])[2]', 'pomlp3Mktma6SdB')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Modal" Button
        tag: div | purpose: navigation
      *
      clickModal() {
        return cy.get('(//*[normalize-space(.)="Modal"])[2]', 'pomDFsIeZGNbqtw')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Popover" Button
        tag: div | purpose: navigation
      *
      clickPopover() {
        return cy.get('(//*[normalize-space(.)="Popover"])[2]', 'pomgiM5yPB7JjWq')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Tooltip" Button
        tag: div | purpose: navigation
      *
      clickTooltip() {
        return cy.get('(//*[normalize-space(.)="Tooltip"])[2]', 'pomxTmOpFlmWgXh')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "ActionSheet" Button
        tag: div | purpose: navigation
      *
      clickActionSheet2() {
        return cy.get('(//*[normalize-space(.)="ActionSheet"])[2]', 'pomO32HAc7tYJhp')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Avatar" Button
        tag: div | purpose: navigation
      *
      clickAvatar() {
        return cy.get('(//*[normalize-space(.)="Avatar"])[2]', 'pomxpk3Fso2WDNO')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Icon" Button
        tag: div | purpose: navigation
      *
      clickIcon2() {
        return cy.get('(//*[normalize-space(.)="Icon"])[2]', 'pomQwVR4sb7B9jG')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Image" Button
        tag: div | purpose: navigation
      *
      clickImage() {
        return cy.get('(//*[normalize-space(.)="Image"])[2]', 'pom59AycvI14kO3')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "PresenceTransition" Button
        tag: div | purpose: navigation
      *
      clickPresenceTransition() {
        return cy.get('(//*[normalize-space(.)="PresenceTransition"])[2]', 'pom23iw9xjqOmhx')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Slide" Button
        tag: div | purpose: navigation
      *
      clickSlide() {
        return cy.get('(//*[normalize-space(.)="Slide"])[2]', 'pomHun7gUQfMH6f')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Stagger" Button
        tag: div | purpose: navigation
      *
      clickStagger() {
        return cy.get('(//*[normalize-space(.)="Stagger"])[2]', 'pompcUQBBLjk3eb')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Fab" Button
        tag: div | purpose: navigation
      *
      clickFab() {
        return cy.get('(//*[normalize-space(.)="Fab"])[2]', 'pomD1KzleWgrHJk')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Hidden" Button
        tag: div | purpose: navigation
      *
      clickHidden() {
        return cy.get('(//*[normalize-space(.)="Hidden"])[2]', 'pomAVGDiv53f1Ri')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "ScrollView" Button
        tag: div | purpose: navigation
      *
      clickScrollView() {
        return cy.get('(//*[normalize-space(.)="ScrollView"])[2]', 'pomxVZGb9Qu1T31')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "View" Button
        tag: div | purpose: navigation
      *
      clickView() {
        return cy.get('(//*[normalize-space(.)="View"])[2]', 'pomzN1O1DkaTgNe')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "KeyboardAvoidingView" Button
        tag: div | purpose: navigation
      *
      clickKeyboardAvoidingView() {
        return cy.get('(//*[normalize-space(.)="KeyboardAvoidingView"])[2]', 'poml5fz7VyKvgtc')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "StatusBar" Button
        tag: div | purpose: navigation
      *
      clickStatusBar() {
        return cy.get('(//*[normalize-space(.)="StatusBar"])[2]', 'pom87vU7N1wQz5t')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "FlatList" Button
        tag: div | purpose: navigation
      *
      clickFlatList() {
        return cy.get('(//*[normalize-space(.)="FlatList"])[2]', 'pomnkcciVtlRn2r')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "SectionList" Button
        tag: div | purpose: navigation
      *
      clickSectionList() {
        return cy.get('(//*[normalize-space(.)="SectionList"])[2]', 'pomblIlLmqxGgDi')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useDisclose" Button
        tag: div | purpose: navigation
      *
      clickUseDisclose() {
        return cy.get('(//*[normalize-space(.)="useDisclose"])[2]', 'pomGvPbKi5iPiOz')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useBreakpointValue" Button
        tag: div | purpose: navigation
      *
      clickUseBreakpointValue() {
        return cy.get('(//*[normalize-space(.)="useBreakpointValue"])[2]', 'pomPR8dDurdTjUD')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useClipboard" Button
        tag: div | purpose: navigation
      *
      clickUseClipboard() {
        return cy.get('(//*[normalize-space(.)="useClipboard"])[2]', 'pomnRLf2CAtj4pf')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useMediaQuery" Button
        tag: div | purpose: navigation
      *
      clickUseMediaQuery() {
        return cy.get('(//*[normalize-space(.)="useMediaQuery"])[2]', 'pombr6WmCqkRqaj')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useTheme" Button
        tag: div | purpose: navigation
      *
      clickUseTheme() {
        return cy.get('(//*[normalize-space(.)="useTheme"])[2]', 'pomw3mxPDIxeC7p')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useToken" Button
        tag: div | purpose: navigation
      *
      clickUseToken() {
        return cy.get('(//*[normalize-space(.)="useToken"])[2]', 'pomeMBy5gfK4OwD')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useColorMode" Button
        tag: div | purpose: navigation
      *
      clickUseColorMode() {
        return cy.get('(//*[normalize-space(.)="useColorMode"])[2]', 'pomUetV9pcleO9x')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useColorModeValue" Button
        tag: div | purpose: navigation
      *
      clickUseColorModeValue() {
        return cy.get('(//*[normalize-space(.)="useColorModeValue"])[2]', 'pom7yl3P8cIjeYQ')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useContrastText" Button
        tag: div | purpose: navigation
      *
      clickUseContrastText() {
        return cy.get('(//*[normalize-space(.)="useContrastText"])[2]', 'pom3Ce4lrROVi7N')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "useAccessibleColors" Button
        tag: div | purpose: navigation
      *
      clickUseAccessibleColors() {
        return cy.get('(//*[normalize-space(.)="useAccessibleColors"])[2]', 'pomjOQE4i5Lkegh')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Todo-List" Button
        tag: div | purpose: navigation
      *
      clickTodoList() {
        return cy.get('(//*[normalize-space(.)="Todo-List"])[2]', 'pomZjOgt7Toycl1')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Kitchen Sink" Button
        tag: div | purpose: navigation
      *
      clickKitchenSink() {
        return cy.get('(//*[normalize-space(.)="Kitchen Sink"])[2]', 'pomgLvGltW8Pjnb')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Designs" Button
        tag: div | purpose: navigation
      *
      clickDesigns() {
        return cy.get('(//*[contains(text(),"Designs")])[0]', 'pomXNrz7CITWh7n')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "AppBar" Button
        tag: div | purpose: navigation
      *
      clickAppBar() {
        return cy.get('(//*[normalize-space(.)="AppBar"])[2]', 'pom1A3TtsjmwVwB')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Card" Button
        tag: div | purpose: navigation
      *
      clickCard2() {
        return cy.get('(//*[normalize-space(.)="Card"])[2]', 'pomhnh4GhEDAQIG')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Drawer Navigation" Button
        tag: div | purpose: navigation
      *
      clickDrawerNavigation() {
        return cy.get('(//*[normalize-space(.)="Drawer Navigation"])[2]', 'pomN1XTqWNKwzig')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Tab View" Button
        tag: div | purpose: navigation
      *
      clickTabView() {
        return cy.get('(//*[normalize-space(.)="Tab View"])[2]', 'pom7NVhl8zsQVxe')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Swipe List" Button
        tag: div | purpose: navigation
      *
      clickSwipeList2() {
        return cy.get('(//*[normalize-space(.)="Swipe List"])[2]', 'pomW3U7ifrdedTj')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Forms" Button
        tag: div | purpose: navigation
      *
      clickForms() {
        return cy.get('(//*[contains(text(),"Forms")])[0]', 'pomgVeByGc5FDlB')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Form with Validation" Button
        tag: div | purpose: navigation
      *
      clickFormWithValidation() {
        return cy.get('(//*[normalize-space(.)="Form with Validation"])[2]', 'pomNjIAJyuHBX8z')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Login/Signup Forms" Button
        tag: div | purpose: navigation
      *
      clickLoginSignupForms() {
        return cy.get('(//*[normalize-space(.)="Login/Signup Forms"])[2]', 'pom7qQq5uFSScGA')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "SearchBar" Button
        tag: div | purpose: navigation
      *
      clickSearchBar() {
        return cy.get('(//*[normalize-space(.)="SearchBar"])[2]', 'pomcMpVa4hcCJ23')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Layout" Button
        tag: div | purpose: navigation
      *
      clickLayout2() {
        return cy.get('(//*[contains(text(),"Layout")])[0]', 'pomM47LniTRiqrR')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "App Drawer" Button
        tag: div | purpose: navigation
      *
      clickAppDrawer() {
        return cy.get('(//*[normalize-space(.)="App Drawer"])[2]', 'pomwuIPjl7BugWv')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Footer" Button
        tag: div | purpose: navigation
      *
      clickFooter() {
        return cy.get('(//*[normalize-space(.)="Footer"])[2]', 'pom7eg9MlNCCwJK')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Upgrading to v3" Button
        tag: div | purpose: navigation
      *
      clickUpgradingToV3() {
        return cy.get('(//*[normalize-space(.)="Upgrading to v3"])[2]', 'pomdhrGKttWQrQt')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Upgrading to 3.2.0 from 3.x" Button
        tag: div | purpose: navigation
      *
      clickUpgradingTo320From3X() {
        return cy.get('(//*[normalize-space(.)="Upgrading to 3.2.0 from 3.x"])[2]', 'pomHGANc4fsSBAj')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Upgrading to 3.4.0 from 3.3.x" Button
        tag: div | purpose: navigation
      *
      clickUpgradingTo340From33X() {
        return cy.get('(//*[normalize-space(.)="Upgrading to 3.4.0 from 3.3.x"])[2]', 'pomMnuaW7kyMXrb')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Components Migration" Button
        tag: div | purpose: navigation
      *
      clickComponentsMigration() {
        return cy.get('(//*[contains(text(),"Components Migration")])[0]', 'pomGvMQnNtqLXMz')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "ActionSheet" Button
        tag: div | purpose: navigation
      *
      clickActionSheet1() {
        return cy.get('//div/div[2]/div/div[1]/*[normalize-space(.)="ActionSheet"]', 'pomP6XgguKjIRzl')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Badge" Button
        tag: div | purpose: navigation
      *
      clickBadge1() {
        return cy.get('(//div/div[2]/*[normalize-space(.)="Badge"])[2]', 'pomx1wfJY995QtP')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Button" Button
        tag: div | purpose: navigation
      *
      clickButton1() {
        return cy.get('//div/div[3]/*[normalize-space(.)="Button"]', 'pomFZ87o9EMHlDP')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Card" Button
        tag: div | purpose: navigation
      *
      clickCard1() {
        return cy.get('//div/div[4]/*[normalize-space(.)="Card"]', 'pombPks56bWvBfn')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Checkbox" Button
        tag: div | purpose: navigation
      *
      clickCheckbox() {
        return cy.get('//div/div[5]/*[normalize-space(.)="Checkbox"]', 'pom9t7KJeGmwtDP')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "DatePicker" Button
        tag: div | purpose: navigation
      *
      clickDatePicker() {
        return cy.get('(//*[normalize-space(.)="DatePicker"])[2]', 'pomIbnagUN4HTZM')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "DeckSwiper" Button
        tag: div | purpose: navigation
      *
      clickDeckSwiper() {
        return cy.get('(//*[normalize-space(.)="DeckSwiper"])[2]', 'pomAihDOlxivksP')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Drawer" Button
        tag: div | purpose: navigation
      *
      clickDrawer() {
        return cy.get('(//*[normalize-space(.)="Drawer"])[2]', 'pomZxSresq9aZGQ')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "FABs" Button
        tag: div | purpose: navigation
      *
      clickFABs() {
        return cy.get('(//*[normalize-space(.)="FABs"])[2]', 'pomHh6AGf5SYA5P')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "FooterTab" Button
        tag: div | purpose: navigation
      *
      clickFooterTab() {
        return cy.get('(//*[normalize-space(.)="FooterTab"])[2]', 'pomXXlqg1vNlxri')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Form" Button
        tag: div | purpose: navigation
      *
      clickForm() {
        return cy.get('(//*[normalize-space(.)="Form"])[2]', 'pom9AhxOdXjIoAx')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Header" Button
        tag: div | purpose: navigation
      *
      clickHeader() {
        return cy.get('(//*[normalize-space(.)="Header"])[2]', 'pomOy7bfFsgkcrc')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Icon" Button
        tag: div | purpose: navigation
      *
      clickIcon1() {
        return cy.get('(//div[preceding-sibling::*[descendant::text()="Header"]]/div)[1]', 'pomeSOkf2YtcQDN')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Layout" Button
        tag: div | purpose: navigation
      *
      clickLayout1() {
        return cy.get('(//div[preceding-sibling::*[descendant::text()="Header"]]/div)[2]', 'pomg75eCflfjwQn')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Picker" Button
        tag: div | purpose: navigation
      *
      clickPicker() {
        return cy.get('(//*[normalize-space(.)="Picker"])[2]', 'pomv5mJRt4hplH1')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Radio Button" Button
        tag: div | purpose: navigation
      *
      clickRadioButton() {
        return cy.get('(//*[normalize-space(.)="Radio Button"])[2]', 'pomleV8h53ewUm9')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Searchbar" Button
        tag: div | purpose: navigation
      *
      clickSearchbar() {
        return cy.get('(//*[normalize-space(.)="Searchbar"])[2]', 'pomiNgKUDwER6Fx')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Segment" Button
        tag: div | purpose: navigation
      *
      clickSegment() {
        return cy.get('(//*[normalize-space(.)="Segment"])[2]', 'pomzRGHj67NbiLb')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Spinner" Button
        tag: div | purpose: navigation
      *
      clickSpinner1() {
        return cy.get('(//div[preceding-sibling::*[descendant::text()="Segment"]]/div)[1]', 'pomjugtXxxdKfqV')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "SwipeList" Button
        tag: div | purpose: navigation
      *
      clickSwipeList1() {
        return cy.get('(//*[normalize-space(.)="SwipeList"])[2]', 'pomIHDlAwdCLw1f')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Tabs" Button
        tag: div | purpose: navigation
      *
      clickTabs() {
        return cy.get('(//*[normalize-space(.)="Tabs"])[2]', 'pomh9n8j3CfnWx2')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Thumbnail" Button
        tag: div | purpose: navigation
      *
      clickThumbnail() {
        return cy.get('(//*[normalize-space(.)="Thumbnail"])[2]', 'pomajrIviUVWWwg')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Changelog" Button
        tag: div | purpose: navigation
      *
      clickChangelog() {
        return cy.get('(//*[normalize-space(.)="Changelog"])[2]', 'pomemO5ryt7mayK')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "Testing" Button
        tag: div | purpose: navigation
      *
      clickTesting() {
        return cy.get('(//*[normalize-space(.)="Testing"])[2]', 'pom3moGqtleTWeG')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "FAQ's" Button
        tag: div | purpose: navigation
      *
      clickFAQS() {
        return cy.get('(//*[normalize-space(.)="FAQ's"])[2]', 'pomHliJj3YMraRZ')
          .click();
      }
      
      /**
        "NativeBase" Box  > Navigation > "More Props" Button
        tag: div | purpose: navigation
      *
      clickMoreProps() {
        return cy.get('(//*[normalize-space(.)="More Props"])[2]', 'pomMurNe8s93icC')
          .click();
      }
      
      /**
        "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Installation Guide" Button
        href: /installation | tag: a | purpose: navigation
      *
      clickInstallationGuideSetupNativeBaseInYourProject() {
        return cy.get('(//*[contains(@class,"r-xkdzue")])[1]', 'pomEax8XGH3bcSe')
          .click();
      }
      
      /**
        "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Playground" Button
        href: /@native-base/nativebase-playground | tag: a | purpose: navigation
      *
      clickPlaygroundTryNativeBaseOnSnackByExpo() {
        return cy.get('//*[@href="https://snack.expo.dev/@native-base/nativebase-playground"]', 'pomWAXFE2mAbyl9')
          .click();
      }
      
      /**
        "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Theming" Button
        href: /default-theme | tag: a | purpose: navigation
      *
      clickThemingCreateYourOwnDesignSystem() {
        return cy.get('(//*[@href="/default-theme"])[2]', 'pomygLv8iBi1bm5')
          .click();
      }
      
      /**
        "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Recipes" Button
        href: /login-signup-forms | tag: a | purpose: navigation
      *
      clickRecipesPopularRecipesForApps() {
        return cy.get('(//*[contains(text(),"Recipes")])[0]', 'pomck9qsnH3fupk')
          .click();
      }
      
      /**
        "NativeBase" Box  > "Next" Button
        tag: div | purpose: navigation
      *
      clickYx2mys1gz115o() {
        return cy.get('(//*[contains(text(),"Next")])[0]', 'pomFjXc41jwDnBd')
          .click();
      }
      
      /**
        main page > "MadeWithNativeBase" Button
        tag: a | purpose: navigation
      *
      clickPaaoog90m4p6() {
        return cy.get('div>.r-lchren', 'pomfKL2UHMl71rk')
          .click();
      }
      
    }
    
    */