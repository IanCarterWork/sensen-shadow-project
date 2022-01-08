/**
 * Requires
 */
const fs = require('fs');
const fse = require('fs-extra');

const path = require('path');
const SensenCli = require('.');






/**
 * Sensen Config
 */

const SensenConfig = require('../sensen.config');






/**
 * Sensen Contantes
 */
const projectDir = path.resolve(__dirname, '../')

const projectName = path.basename(projectDir)

const SensenModules = [
    {
        from: "./node_modules/sensen-hinata/core",
        to: `${SensenConfig.App.Path}/sensen-hinata/`
    }
]





/**
 * Works Initialization
 */

SensenCli.Log

    .Message('Sensen Mount Core Itialization...')

    .Message('Project PATH', projectName)

    .Message('Application PATH', SensenConfig.App.Path)






/**
 * Files Copy
 */

if(Array.isArray(SensenModules)){

    if(SensenModules.length){

        SensenModules.map(mod=>{

            const from = path.resolve(projectDir, mod.from)

            const to = path.resolve(projectDir, mod.to + '/')

            const statsFrom = fs.statSync(from)

            // const statsTo = fs.statSync(to)


            // if(statsFrom.isDirectory()){
                
            //     if(!fs.existsSync(to)){ 
                    
            //         fs.mkdirSync(to);

            //         fs.chmod(to, 0777, ()=>{

            //             SensenCli.Log.Error('Permission failed', path.basename(from))

            //         })
            //     }

            // }


            SensenCli.Log.Message('Upgrading', path.basename(from))

            try{


                /** * Directory */

                if(statsFrom.isDirectory()){

                    fse.copySync(from, to,{ overwrite: true }, function (err) {

                        if (err){

                            SensenCli.Log.Error('Mounting failed', err )
            
                        } 
                        
                    });


                    SensenCli.Log.Success('Mounting Success', path.basename(from))


                }
                
                /** * File */
                else{
                
                    fs.createReadStream(from).pipe(fs.createWriteStream( to ))

                    SensenCli.Log.Success('Mounting Success', path.basename(from))

                }
                
            }

            catch(e){

                SensenCli.Log.Error('Mounting failed', e)

            }

            

        })
        
    }
    
}
