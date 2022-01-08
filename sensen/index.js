const SensenCli = {}


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



module.exports = SensenCli;