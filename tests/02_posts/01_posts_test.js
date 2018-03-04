/// <reference path="../../steps.d.ts" />

Feature('Posting @current');

Before((I, Security) => {
    Security.loginAsAdmin();
});

Scenario('Creating a new post', (I) => {
    I.amOnPage('/wp-admin/edit.php');
    I.click('Add New');
    I.fillField('#title', 'My new test post')
    I.switchTo('#content_ifr'); // switching to TinyMCE iFrame
    I.click('#tinymce');
    I.fillField('#tinymce', 'This is the content of my new test post.');
    I.switchTo(); // back to parent
    I.click('Publish');
    I.see('Post published. View post');
    I.click('View post');
    I.seeInCurrentUrl('my-new-test-post');
    I.see('My new test post');
    I.see('This is the content of my new test post.');
});

Scenario('Removing created post', (I) => {
    I.amOnPage('/wp-admin/edit.php');
    I.moveCursorTo('#the-list a[aria-label*="My new test post"]');
    I.click('Trash');
    I.see('1 post moved to the Trash. Undo');
    I.dontSee('My new test post');
});