let softwareLibrary = {};
let softwareFrame = {};
let softwareHide = {};

const runSoftware = (id) => {
    if (softwareLibrary[id] !== undefined) {
        softwareLibrary[id].run();

        menuOpen();
    }
    else {
        const errorMessage = jsFrame.create({
            title: 'Error',
            left: 20, top: 40, width: 200, height: 100,
            movable: true,
            resizable: false,
            appearanceName: 'appearance',
            style: {
                backgroundColor: '#FFFFFF',
                userSelect: 'none',
            },
            html: `
            <div style="width: 190px; height: 67px; margin: 5px; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center;align-items: center;">
                <span style="font-size: medium;">Application not found.</span>
                Application ID: ${id}
            </div>
            `,
        })

        errorMessage.show();
    }
}