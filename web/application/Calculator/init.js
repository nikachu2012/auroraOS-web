(() => {
    const softwareName = 'Calculator'; // SoftwareName (This will also appear on the menu) WARNING: The name should be the same as the folder containing this file 
    const iconURL = 'data:image/png;base64,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'; // Icon URL
    const id = 'net.nikachu.calclator'; // ID (In the form of an android package name.)
    const url = `https://calculator.apps.chrome/` // view page

    const width = 320;
    const height = 550;

    /* 
        Do not change this code.
        (Unless you are familiar with the code.)
    */

    softwareFrame[softwareName] = [];
    softwareHide[softwareName] = [];

    softwareLibrary[softwareName] = {
        run: function () {
            softwareFrame[softwareName].push(jsFrame.create({
                title: softwareName + `(${softwareFrame[softwareName].length + 1})`,
                name: `${softwareName}${softwareFrame[softwareName].length + 1}`,
                left: 20, top: 40, width: width, height: height,
                movable: true,
                resizable: true,
                appearanceName: 'yosemite',
                url: url
            }));

            softwareHide[softwareName].push(true);

            const element = document.createElement('button')
            element.innerHTML = `
                <img src="${iconURL}" alt="${id}"><span>${softwareName} (${softwareFrame[softwareName].length})</span>`
            element.className = 'header_task'
            element.id = softwareName + softwareFrame[softwareName].length;

            element.onclick = () => {
                const length = softwareHide[softwareName].length - 1;

                if (softwareHide[softwareName][length] == true) {
                    softwareFrame[softwareName][length].hide();
                    softwareHide[softwareName][length] = false;
                }
                else {
                    softwareFrame[softwareName][length].show();
                    softwareHide[softwareName][length] = true;
                }
            }

            document.getElementById('tasklist').appendChild(element)

            const rightclick = document.createElement('div')
            rightclick.className = 'menu';
            rightclick.id = `${softwareName}${softwareFrame[softwareName].length}_menu`
            rightclick.innerHTML = `
            <div class="menu-contents first" id="${softwareName}${softwareFrame[softwareName].length}_menu_minimize">Minimize</div>
            <div class="menu-contents" id="${softwareName}${softwareFrame[softwareName].length}_menu_quit">Quit</div>
            `
            document.querySelector('.body').appendChild(rightclick);

            document.getElementById(`${softwareName}${softwareFrame[softwareName].length}_menu_minimize`).addEventListener('click', () => {
                // タスクバー右クリックメニューでの最小化時の動作
                const length = softwareHide[softwareName].length - 1;

                if (softwareHide[softwareName][length] == true) {
                    softwareFrame[softwareName][length].hide();
                    softwareHide[softwareName][length] = false;
                }
                else {
                    softwareFrame[softwareName][length].show();
                    softwareHide[softwareName][length] = true;
                }
            })


            document.getElementById(`${softwareName}${softwareFrame[softwareName].length}_menu_quit`).addEventListener('click', () => {
                // タスクバー右クリックメニューでの終了時の操作
                element.remove();
                rightclick.remove();


                softwareFrame[softwareName][length].closeFrame();

                softwareFrame[softwareName].splice(softwareFrame[softwareName].length - 1, 1)
                softwareHide[softwareName].splice(softwareHide[softwareName].length - 1, 1)
            })


            document.getElementById(softwareName + softwareFrame[softwareName].length).addEventListener('contextmenu', (e) => {
                rightclick.style.left = `${e.pageX}px`
                rightclick.style.visibility = 'visible'

                document.body.addEventListener('click', () => {
                    rightclick.style.visibility = 'hidden'
                }, { once: true })
            })


            const length = softwareFrame[softwareName].length - 1;
            softwareFrame[softwareName][length].setControl({
                maximizeButton: 'zoomButton',
                demaximizeButton: 'dezoomButton',
                maximizeWithoutTitleBar: false,
                restoreKey: 'Escape',
                animation: true,
                animationDuration: 70,
            });

            softwareFrame[softwareName][length].on('minimizeButton', 'click', (_frame, evt) => {
                // ウィンドウの最小化の動作
                const length = softwareHide[softwareName].length - 1;

                softwareFrame[softwareName][length].hide();
                softwareHide[softwareName][length] = false;

            });

            softwareFrame[softwareName][length].on('closeButton', 'click', (_frame, evt) => {
                // ウィンドウで閉じるボタンを押したときの動作
                element.remove();
                rightclick.remove();
                softwareFrame[softwareName][length].closeFrame();
                softwareFrame[softwareName].splice(softwareFrame[softwareName].length - 1, 1)
                softwareHide[softwareName].splice(softwareHide[softwareName].length - 1, 1)
            });


            softwareFrame[softwareName][length].show();
        },
    }



})();
