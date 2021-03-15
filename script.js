document.getElementById('search').onsubmit = loadChart();

function loadChart() {
	let symbols = document.getElementById("txt_search").value;
	new TradingView.widget(
		{
			"width": 980,
			"height": 610,
			"symbol": "NASDAQ:AAPL" + symbols,
			"interval": "D",
			"timezone": "Asia/Jakarta",
			"theme": "dark",
			"style": "9",
			"locale": "uk",
			"toolbar_bg": "#f1f3f6",
			"enable_publishing": false,
			"withdateranges": true,
			"allow_symbol_change": true,
			"details": true,
			"container_id": "tv__chart"
		}
	);
}