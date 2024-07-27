// import { useEffect, useRef, useState } from "react";
import  {About}  from "./component/About";
import  {CanvasContainer}  from "./component/CanvasContainer";
import  {Hero}  from "./component/Hero";
import  {BuyNow}  from "./component/BuyNow";
import  {Header}  from "./component/Header";

function App() {
	return (
		<main className="overflow-x-hidden">
			<div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
				<CanvasContainer />
			</div>
			<Header />
			<Hero />
			<About />
			<BuyNow />
		</main>
	);
}

export default App;