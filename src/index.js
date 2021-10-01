import { Sauveur, Chappies } from "@codebenderhq/canvas/";
// import MainApp from '@codebenderhq/canvas/src/theme/sauveur/components/app'
import "@codebenderhq/canvas/src/theme/sauveur/style/index.css";

Sauveur.app(() => (
  <Chappies.Layout>
    <Chappies.LayoutCol>
        <div className="text-8xl p-8 text-center font-chappies-bold ">
            <span className="text-blue-500">C</span>
            <span className="text-red-500">h</span>
            <span className="text-yellow-300">a</span>
            <span className="text-blue-500">p</span>
            <span className="text-green-500">p</span> 
            <span className="text-red-500">i</span>
            <span className="text-yellow-300">e</span>
            <span className="text-green-500">s</span>
        </div>
      <Chappies.Search></Chappies.Search>
 
    </Chappies.LayoutCol>
    <div className="w-full h-full absolute flex items-end justify-center z-0 object-bottom p-2 font-chappies-regular select-none">
        A design by <a href="https://twitter.com/DonovanGoliath" className="mx-1">@DonovanGoliath</a>
    </div>
 
  </Chappies.Layout>
));

// (() => {
//     <App>
//         <>hello world</>
//     </App>
// })
// App(() => <>hello world</>)

// app(() => (<Splash theme={"black"}></Splash>));
