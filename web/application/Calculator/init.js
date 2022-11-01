(() => {
    const softwareName = 'Calculator'; // SoftwareName (This will also appear on the menu) WARNING: The name should be the same as the folder containing this file 
    const iconURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADn0lEQVRoge1YPW/UQBB9PlGhEJ19QkqU8AsQElVydwkVJRXwH9LR0fEHqKnIf0CiTIlEzuccHQUFNZFOEfJaIdQ3FLb39sveWd8dTfKkKN6Z8e6b3efZ2wXucIfbjYgT9P7D6QsQnUbAHgAQkR5ABPK0ASxtDW1pI7rs9Xon796+OfNx63ESiIg+RsAeiHTyVdtHnhjkZUzZ3l8s6JTD7R4nCMD+umZd2sy2ZaNHHGKsBEzynGRcxNjJmP23gLsCGtEfz1/iZrADIoAWhMWClP+mrWy7bHWbFkB8fYXjn2dB5AHmN6CSB4CbwU5lqr4Jqsal2gbFRtJGmm0ZQ0TItx66ZeVBJwlV+WgEdFI6acgYMwnD1jLeSgmorFUdmwTaZh9Gouo7gFWF2OgkIYuAJSG3rLTZr/vCMrFQ8gB3BVwlU5t9U0LuxADSZnodEmKtgFb+iLD1e96iaz0Jgr5yqoRUWQ3+XgWTB0K+AWUVHn/5vHJtd+0t5ipz0FlCklhLW9oCk7HGawGvjK6LqMvmS8aDIAnVJA4ODtDv9zV3URT4NpsBAA4Ph+jHul8UBWZZBgAYjsaILb9Alk6t8XzglVF15oks8gAQx7GMMckDQFL5y1iXP9HG26iEGuNW9NdjhIiok4Q2BfOswUEnCbWGsjr0j8fth/1TQiVfFIXlLwohNyXh8gshd19RCMsvRF4NtAEJmTM/m81aS+Ysy1rLY5ZO2XuLD+yNzEXUJNZk63oc5YD9Eavkh8ORs85fTMs6PhqPZVld+gWySQoC8Ok7YX6jk9zdjvD6Cf6PhPx1Pnb4E0ls/mdh+efXBFC0WQmVj56OWQO7Y6i+ptq0hJqDPMtfv0/2CpT25T3b+ndixqz4IuS5oCUyVEJBG1n52FTHhYyVz5o/1/tz/IWSBwIP9bX+L6aZ1laJEYBpmmpELGJNBM29hYEVrlW61XbOLyquZIHQa5Wq49H4CHFi1HkhypknwtHxM8ufixzp+aTqo+EjRhh5oKOETHIAkCSJnHWXf5AMFGINZTTwNAZ0PRM3hTFjvOeGakwOwg40nI5b/JIYJ4aJ7leLDX7f+yXc30AXCbH3AfXexlnn81zeuuVqza+Q50vb7nbP2gN2H+hUuMl0klA6mWhtLYYI6dfzpc1xbnj19L5la2r7sJqENn3BxQDzSEmX1lZP+kVtWzIdyf9aYwLRCUW4NIk1EjVPcObPcaPtJN/rnfC43eEOtxv/AMR3+JYaMPDrAAAAAElFTkSuQmCC'; // Icon URL
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
