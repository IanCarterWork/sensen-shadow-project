const SensenCli = {
    
    Version: 1,
    
    VersionString: '0.0.1',

    VersionName: 'Shadow',

    Resposite:{

        URL: ``
        
    }

}


/**
 * Sensen CLI::Log
 */
SensenCli.Log = {}

/**
 * Sensen CLI::Log::Message
 */
SensenCli.Log.Message = (title = '', message = '')=>{

    console.log(

        "\x1b[40m", 
        "\x1b[37m", 
        
        title || '', 
        
        '\x1b[0m', 
        
        // '\n', 
        
        message||''
        
    )
                
    return SensenCli.Log;
    
}

/**
 * Sensen CLI::Log::Success
 */
SensenCli.Log.Success = (title = '', message = '')=>{

    console.log(

        "\x1b[42m", 
        
        "\x1b[37m", 
        
        title || '', 
        
        '\x1b[0m', 
        
        // ':', 
        
        message||''
        
    )
           
    return SensenCli.Log;

}

/**
 * Sensen CLI::Log::Error
 */
SensenCli.Log.Error = (title = '', message = '')=>{

    console.error(

        '\x1b[31m',
        
        title || '', 
        
        '\x1b[0m', 
        
        // ':', 
        
        message||''
        
    )

    return SensenCli.Log;
                
}









/**
 * Sensen Bootstrap
 */
SensenCli.Command = function(args){

    switch(args[2] || null){


        /**
         * Create New Project
         */
        case 'create':

            const name = args[3] || null;

            if(name){

                this.Log.Message('Initialization', `${ name }...`)

                
                
            }

            else{

                this.Log.Error('Project Manager', 'Veuillez indiquer le nom de votre projet')
                
            }

        break;




        /**
         * No Command
         */
        default:

            this.Log.Message(
                
                'Sensen', 
                
                `${ this.VersionName }, ${ this.Version } (${ this.VersionString })`

            )

        
        break;

        
        
    }
    

    return SensenCli
    
}








/**
 * Sensen Bootstrap
 */
SensenCli.Boot = function(args){

    // console.log('Sensen Running\n', args)

    return this.Command(args)
    
}




module.exports = SensenCli;