import canvas from '@codebenderhq/canvas/'
import MainApp from '@codebenderhq/canvas/src/components/app'
import compone from '@codebenderhq/canvas/src/'
import '@codebenderhq/canvas/src/style/index.css'




console.log(canvas)
canvas.app(() => (<MainApp><div name="one">hello world</div><div name="world">well what is the next issue</div> </MainApp>))

// (() => {
//     <App>
//         <>hello world</>
//     </App>
// })
// App(() => <>hello world</>)


// app(() => (<Splash theme={"black"}></Splash>));
