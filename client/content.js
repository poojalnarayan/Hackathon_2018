InboxSDK.load('1', 'sdk_pooja_dfe00e25c5').then(function(sdk){

	// the SDK has been loaded, sidebar example
	//sdk.Conversations.registerThreadViewHandler(threadView => {
	sdk.Conversations.registerMessageViewHandler(function(messageView) {
		const el = document.createElement("div");
		//el.innerHTML = 'Hello world!';
		el.innerHTML = messageView.getBodyElement();

		el.textContent = messageView.getBodyElement().textContent;
		
		const el2 = document.createElement("div");
		el2.textContent = messageView.getSender().emailAddress;
		/*var newDiv = document.createElement("div");
		var newContent = document.createTextNode(messageView.getBodyElement());
		newDiv.appendChild(newContent);
		//add the newly created element and its content into the DOM 
		var currentDiv = document.getElementById("div1"); 
		document.body.insertBefore(newDiv, currentDiv);*/
			var threadView = messageView.getThreadView();
			//Add code to predict if its from the intended sender. From Machine learning system. Havent integrated yet due to privacy issues! I have run the model on Enron corpus with half a million messages.
			threadView.addSidebarContentPanel({
				//el: sidebarForThread.get(threadView),
				title: el2.textContent, //'Sidebar Example',
				iconUrl:  'https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365',
				el
			});
		
	});

});
