const sheet = new CSSStyleSheet({baseURL: './main.css'});
sheet.insertRule(":root {--data-new: 'Hello world'}");
sheet.replaceSync(":root {--data: 'Smth'; --data-new: 'Hello world'}")
document.adoptedStyleSheets = [sheet];