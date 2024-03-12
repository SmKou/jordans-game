export const errors = { 
    support: 'not supported', 
    permission: 'permission not granted' 
}

function Error(name, prompt, callback) {
    const error = { 
        status: false,
        error: errors[name]
    }
    if (prompt) { error.prompt = prompt }
    if (callback) { error.callback = callback }
    return error
}