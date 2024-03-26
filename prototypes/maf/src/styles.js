export const start_styles = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

export const container_styles = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
}

export const styleContainer = (dark) => {
    const ctnr_styles = {...container_styles}
    if (dark)
        ctnr_styles.backgroundColor = "#111"
    return ctnr_styles
}

export const user_input_styles = {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#1112"
}

export const styleUserInput = (dark) => {
    const ui_styles = {...user_input_styles}
    if (dark)
        ui_styles.backgroundColor = "#fff2"
    return ui_styles
}

export const gamepad_styles = {
    width: "13.2rem",
    display: "flex",
    flexDirection: "column",
    p: "0.6rem"
}

