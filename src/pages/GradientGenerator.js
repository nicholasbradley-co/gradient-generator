import { useState, useRef } from 'react';
import fileSaver from 'file-saver';

function GradientGenerator() {
  const [color1, setColor1] = useState('#dbeafe');
  const [color2, setColor2] = useState('#3b82f6');
  const canvasRef = useRef(null);

const downloadImage = () => {
  const node = canvasRef.current;
  const { width, height } = node.getBoundingClientRect();
  
  const canvas = document.createElement('canvas');
  canvas.width = 4800;
  canvas.height = 3200;
  
  const context = canvas.getContext('2d');
  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  canvas.toBlob(function (blob) {
    fileSaver.saveAs(blob, 'Gradient.png');
  });
};

  return (
    <div className="h-full w-full">
          <div
               className="h-screen w-screen absolute inset-0"
               style={{
                    background: `linear-gradient(to right, ${color1}, ${color2})`,
               }}
               ref={canvasRef}
          />

          
          <div className="relative h-[80vh] w-screen flex flex-col items-center justify-center z-10">
               
               <h1 className="flex items-start font-bold text-4xl sm:text-5xl md:text-6xl leading-normal">Gradient Generator</h1>
               <div className="flex justify-center space-x-2 w-full mt-8">
               <label className="cursor-pointer">
                    <div className="bg-white hover:opacity-80 flex space-x-2 items-center pl-8 pr-3 py-1.5 rounded-full transition duration-300">
                         <span className="font-medium uppercase">{color1}</span>
                         <input
                              id="colorBox"
                              className=""
                              type="color"
                              value={color1}
                              onChange={(e) => setColor1(e.target.value)}
                         />
                    </div>
               </label>
               <label className="cursor-pointer">
                    <div className="bg-white hover:opacity-80 flex space-x-2 items-center pl-8 pr-3 py-1.5 rounded-full transition duration-300">
                         <span className="font-medium uppercase">{color2}</span>
                         <input
                              id="colorBox"
                              className=""
                              type="color"
                              value={color2}
                              onChange={(e) => setColor2(e.target.value)}
                         />
                    </div>
               </label>
               </div>
               <div className="relative flex mt-12 z-10">
                    <button className="bg-black hover:opacity-80 text-white font-bold py-2.5 px-6 rounded-full flex space-x-1" onClick={downloadImage}>
                         <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                         </svg>
                         <span>Download .PNG</span>
                    </button>
               </div>

          </div>
          <div className="relative flex items-center justify-center w-screen">
               <p className=""><a href="https://twitter.com/NickDevCode?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @NickDevCode</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>
          </div>
    </div>
  );
}

export default GradientGenerator;
