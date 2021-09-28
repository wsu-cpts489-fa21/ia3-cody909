import { Selector } from 'testcafe';

fixture `task2Tests`
    .page `http://127.0.0.1:5501/index.html`;

test('menu btn keydown handler test', async t => {
    await t
        .typeText(Selector("#email"), "jisagep368@enamelme.com")
        .typeText(Selector("#password"), "jojhIn-fuvpe4-zyzwus")
        .click("#loginBtn")
        .click("#menuBtn")
        .click("#menuBtn")
        .pressKey('down')
        .expect(Selector("#sideMenu").visible).eql(true)
        .expect(Selector("#sideMenu").child(0).focused).eql(true)
});
    

    
test('menu item keydown handler test1', async t => {
    await t
        .typeText(Selector("#email"), "jisagep368@enamelme.com")
        .typeText(Selector("#password"), "jojhIn-fuvpe4-zyzwus")
        .click("#loginBtn")
        // put focus on menuBtn
        .click("#menuBtn")
        .click("#menuBtn")
        // put focus on first menu item ()
        .pressKey('enter')
    
        .pressKey('down')
        // expect focus to be on second list item
        .expect(Selector("#sideMenu").child(1).focused).eql(true)
    
        .pressKey('down')
        // expect focus to be on last list item
        .expect(Selector("#sideMenu").child(2).focused).eql(true)
    
        .pressKey('down')
        // expect focus to be on first list item
        .expect(Selector("#sideMenu").child(0).focused).eql(true)
});
    
test('menu item keydowb handler test2', async t => {
    await t
        .typeText(Selector("#email"), "jisagep368@enamelme.com")
        .typeText(Selector("#password"), "jojhIn-fuvpe4-zyzwus")
        .click("#loginBtn")
        // put focus on menuBtn
        .click("#menuBtn")
        .click("#menuBtn")
        // put focus on first menu item ()
        .pressKey('enter')
    
        .pressKey('down')
        // expect focus to be on second list item
        .expect(Selector("#sideMenu").child(1).focused).eql(true)
    
        .pressKey('home')
        // expect focus to be on first list item
        .expect(Selector("#sideMenu").child(0).focused).eql(true)
    
        // put focus on last list item
        .pressKey('down')
        .pressKey('down')
    
        .pressKey('home')
        // expect focus to be on first list item
        .expect(Selector("#sideMenu").child(0).focused).eql(true)
});

    
test('menu item keydown hadler test3', async t => {
    await t
        .typeText(Selector("#email"), "jisagep368@enamelme.com")
        .typeText(Selector("#password"), "jojhIn-fuvpe4-zyzwus")
        .click("#loginBtn")
        // put focus on menuBtn
        .click("#menuBtn")
        .click("#menuBtn")
        // put focus on first menu item ()
        .pressKey('enter')
    
        // test for 'l'
        .pressKey('l')
        // expect focus to be on "Log Out" menu Item
        .expect(Selector("#sideMenu").child(2).focused).eql(true)
    
        // test for letter that doesn't match any option
        .pressKey('f')
        // expect focus to not change
        .expect(Selector("#sideMenu").child(2).focused).eql(true)
    
        // test for 'a'
        .pressKey('a')
        // expect focus to be on "About" menu item
        .expect(Selector("#sideMenu").child(1).focused).eql(true)
    
        // test for 's'
        .pressKey('s')
        // expect focus to be on "Settings" menu item
        .expect(Selector("#sideMenu").child(0).focused).eql(true)
    
        // test for 'A'
        .pressKey('A')
        // expect focus to be on "About" menu item
        .expect(Selector("#sideMenu").child(1).focused).eql(true)
    
        // test for 'L'
        .pressKey('L')
        // expect focus to be on "Log Out" menu Item
        .expect(Selector("#sideMenu").child(2).focused).eql(true)
    
        // test for 'S'
        .pressKey('S')
        // expect focus to be on "Settings" menu item
        .expect(Selector("#sideMenu").child(0).focused).eql(true)
});

test("mode tab keydown handler tests", async t => {
    await t
        .typeText(Selector("#email"), "jisagep368@enamelme.com")
        .typeText(Selector("#password"), "jojhIn-fuvpe4-zyzwus")
        .click("#loginBtn")
        .click("#feedMode")
        .pressKey('right')
        .expect(Selector("#roundsMode").focused).eql(true)
        .pressKey('enter')
        .expect(Selector('#roundsModeTab').visible).eql(true)
        .expect(Selector('#feedModeTab').visible).eql(false)
});

test('action dialog keydown tests', async t => {
    await t
        .typeText(Selector("#email"), "jisagep368@enamelme.com")
        .typeText(Selector("#password"), "jojhIn-fuvpe4-zyzwus")
        .click("#loginBtn")
        .click("#feedModeActionBtn")
        .expect(Selector("#feedModeDialog").visible).eql(true)
        .expect(Selector("#feedModeTab").visible).eql(false)

        .click("#roundsMode")
        .expect(Selector('#roundsModeTab').visible).eql(false)
        .click("#feedMode")
        .expect(Selector('#feedModeTab').visible).eql(false)
        .click("#coursesMode")
        .expect(Selector('#coursesModeTab').visible).eql(false)
        .click("#buddiesMode")
        .expect(Selector('#buddiesModeTab').visible).eql(false)
        .click("#menuBtn")
        .expect(Selector('#sideMnu').visible).eql(false)

        .click("#feedModePostBtn")
        .expect(Selector("#feedModeDialog").visible).eql(false)
        .expect(Selector("#feedModeTab").visible).eql(true)

        .click("#feedModeActionBtn")
        .expect(Selector("#feedModeDialog").visible).eql(true)
        .expect(Selector("#feedModeTab").visible).eql(false)

        .click("#feedModePostCancelBtn")
        .expect(Selector("#feedModeDialog").visible).eql(false)
        .expect(Selector("#feedModeTab").visible).eql(true)
});
