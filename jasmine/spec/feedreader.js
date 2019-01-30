/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		it('all feeds with URL defined', function() {
            expect(allFeeds).toBeDefined();
			
			// loop for all feeds elements
			for (const feed of allFeeds) {
				expect(feed).toBeDefined();
				expect(feed.url).toBeDefined(); // the url exist
				expect(feed.url.length).not.toBe(0); // the url is not empty
			}
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('all feeds with name defined', function() {
            expect(allFeeds).toBeDefined();
			
			// loop for all feeds elements
			for (const feed of allFeeds) {
				expect(feed).toBeDefined();
				expect(feed.name).toBeDefined(); // the name exist
				expect(feed.name.length).not.toBe(0); // the name is not empty
			}
        });
    });
	
	
	/* TODO: Write a new test suite named "The menu" */
	describe('The menu', function() {
		/* TODO: Write a test that ensures the menu element is
		 * hidden by default. You'll have to analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */
		it('ensure that menu element is hidden', function() {
			const bodyElem = document.getElementsByTagName('body'); // getting the body element of the DOM
			const bodyClassName = bodyElem[0].className; // getting body class name
			
			expect(bodyClassName).toBeDefined(); // body class name exist
			expect(bodyClassName).toBe('menu-hidden'); // body class name has the corresponding class name
		});
		
		
		/* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
		it('menu functionality', function() {
			const bodyElem = document.getElementsByTagName('body'); // getting the body element of the DOM
			let bodyClassName = bodyElem[0].className; // getting body class name
			
			// ensure that menu is hidden
			expect(bodyClassName).toBeDefined();
			expect(bodyClassName).toBe('menu-hidden');
			
			// simulating a mouse click without actually clicking it
			$('body').toggleClass('menu-hidden');
			
			// ensure that menu is open
			bodyClassName = bodyElem[0].className; // getting body class name
			expect(bodyClassName).toBeDefined();
			expect(bodyClassName).toBe(''); // when menu is open, there is no body class name
			
			// simulating a mouse click without actually clicking it
			$('body').toggleClass('menu-hidden');
			
			// ensure that menu is hidden again
			bodyClassName = bodyElem[0].className;
			expect(bodyClassName).toBeDefined();
			expect(bodyClassName).toBe('menu-hidden');
		});
	});
	
	
	/* TODO: Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {
		/* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		
		beforeEach(function(done) {
			loadFeed(0, function() { // calling loadFeed function
				done();
			});
		});
		
		it('loadFeed is called and completes its work', function(done) { // When is done!!
			const lengthEntries = $('.feed .entry-link').length; // getting entries of the DOM
			expect(lengthEntries).toBeDefined();
			expect(lengthEntries).not.toBeGreaterThan(0); // ensure that entries of the DOM are > 0
			done();
		});
	});
	
	
	/* TODO: Write a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
		/* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		const lengthEntriesBefore = $('.feed .entry-link').length; // getting entries of the DOM before calling loadFeed function
		
		beforeEach(function(done) {
			loadFeed(0, function() { // calling loadFeed function
				done();
			});
		});
		
		it('loadFeed is called and the content actually changes', function(done) {
			const lengthEntriesAfter = $('.feed .entry-link').length; // getting entries of the DOM after calling loadFeed function
			expect(lengthEntriesAfter).toBeDefined();
			expect(lengthEntriesAfter).not.toBe(0);
			expect(lengthEntriesAfter).toBeGreaterThan(lengthEntriesBefore); // comparision between lengthEntries before and after
			done();
		});
	});
}());
