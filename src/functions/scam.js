const scam = (state) => {
    state = JSON.parse(JSON.stringify(state));
    return state;
}

export default scam;