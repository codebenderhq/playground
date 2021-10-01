import {Sauveur} from '@codebenderhq/canvas/'
// import MainApp from '@codebenderhq/canvas/src/theme/sauveur/components/app' 
import '@codebenderhq/canvas/src/theme/sauveur/style/index.css'





console.log(Sauveur)
Sauveur.app(() => (<Sauveur.MainApp><div name="one">hello world</div><div name="world">well what is the next issue</div> </Sauveur.MainApp>))

// (() => {
//     <App>
//         <>hello world</>
//     </App>
// })
// App(() => <>hello world</>)


// app(() => (<Splash theme={"black"}></Splash>));
