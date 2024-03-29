function stripTags(tab) {
    let tabContent = tab.innerText;
    tabContent = tabContent.split('.')[1];
    tabContent = tabContent.split('%%')[0];
    return tabContent;
}

function clearTab(tab) {
    const tabContent = tab.innerText;
    tabContent.innerText = '';
}

function installAQUC() {
    const container = document.createElement('div');

    const title = document.createElement('span');
    title.className = 'product-title';
    title.innerText = '120V LED Under Cabinet Light Bar Installation Instructions: AQUC Series';
    container.appendChild(title);

    const guideWarning = document.createElement('div');
    guideWarning.innerHTML = '<b>WARNING:</b> These products may represent a possible shock and/or fire hazard if improperly installed or attached in any way.  Products should be installed in accordance with these instructions and with current electrical codes and/or the current National Electric Code (NEC).';
    guideWarning.innerHTML += '<br> <br>';
    guideWarning.innerHTML += '<b> WARNING: TO AVOID ELECTRIC SHOCK, DISCONNECT POWER PRIOR TO INSTALLATION!</b>';
    guideWarning.innerHTML += '<br>';
    guideWarning.innerHTML += 'Caution: Injury to person(s), damage to the fixture, and/or mounting surface may result if the fixture is pulled from the surface improperly.  To reduce the likelihood of such injury / damage, mount on a surface that is mechanically and structurally sound.';
    guideWarning.innerHTML += '<br> <br>';
    guideWarning.innerHTML += 'Use only a mild soap and/or water with soft cloth to clean the fixture.  Harsh chemicals will damage the fixture.  Do not wipe the fixture with a rough cloth as it may scratch the fixture or lens.';
    guideWarning.innerHTML += '<br> <br>';
    container.appendChild(guideWarning);

    const hardwireInstall = document.createElement('div');
    hardwireInstall.innerHTML = '<span class="product-title">Installation Methods: Direct Wire</span><br>';
    hardwireInstall.innerHTML += 'A single fixture or the first fixture in a lighting run is attached directly to the house wiring.';
    hardwireInstall.innerHTML += '<ol><li>Remove the lens cover from the fixture by lifting its back edge up gently and rotating it towards the front of the fixture.  See Figure 1</li><li>Punch out whichever knockout is best suited for connection to 120V supply wires.  Knockouts are located along the back and top of the housing.  See Figure 2.</li><li>Detach the cover of the wiring compartment by rotating the plastic screws.  See Figure 3.</li><li>Install cable clamp and connect fixture wires following the National Electric Code and local building requirements.  See Figure 4.  AC supply wires to fixture lead-wires: Black to Black, White to White, Green / Bare Wire to Yellow / Green (Ground) inside the fixture.  Secure each connection using the quick connector provided on the fixture lead wire.  See Figure 5.</li><li>Tighten the two captive screws to secure fixture to mounting surface.</li><li>Replace the wiring compartment cover, securing the lip under metal retaining tabs.  See Figure 6.</li></ol>';
    hardwireInstall.innerHTML += '<b>NOTE:</b> if your system has no ground wire, you should consult a qualified electrician before proceeding with the installation.<br>';
    hardwireInstall.innerHTML += '<b>NOTE:</b> Electric shock, overheating, low or no light output and/or shortened fixture life can result if proper grounding is not done.<br>';
    hardwireInstall.innerHTML += '<b>NOTES:</b> Be sure that the wires are not pinched or damaged by any part of the housing or cover.<br>';
    hardwireInstall.innerHTML += '<img class="lrgimg" src="/product_images/uploaded_images/AQUCfigureA.jpg" alt="AQUC Installation Guide Diagram A" /><br>';
    hardwireInstall.innerHTML += '<img class="lrgimg" src="/product_images/uploaded_images/AQUCfigureB.jpg" alt="AQUC Installation Guide Diagram B" /><br>';
    container.appendChild(hardwireInstall);

    const pluginInstall = document.createElement('div');
    pluginInstall.innerHTML = '<span class="product-title">Installation Method: Plug-In</span><br>';
    pluginInstall.innerHTML += 'A single fixture or the first fixture in a lighting run plugged into a nearby outlet via powercord.<br>';
    pluginInstall.innerHTML += '<b>NOTE:</b> Powercords are sold separately from fixtures.<br>';
    pluginInstall.innerHTML += '<ol><li>Remove the lens cover from the fixture by lifting its back edge up gently and rotating it toward the front of the fixture.  See Figure 1.</li><li>Determine the desired mounting location for the fixture.</li><li>Tighten the two captive screws to secure the fixture to the mounting surface.</li><li>Replace the lens cover by tucking the front lip under the front edge and pressing down firmly along its entire length until secure.  See Figure 9.</li><li>Insert the power cord into the INPUT end of the fixture</li><li>Plug the other end of the power cord into 120V outlet receptacle.</li></ol>';
    container.appendChild(pluginInstall);

    const mountingGuide = document.createElement('div');
    mountingGuide.innerHTML = '<span class="product-title">Mounting the Fixture:</span><br>';
    mountingGuide.innerHTML += '<b>NOTE:</b> Lens cover must be off.<br>';
    mountingGuide.innerHTML += '<ol><li>Determine the desired mounting location of the fixture and mark location of mounting holes (mark at the small end of each hole).</li><li>Tighten the two captive screws to secure fixture to mounting surface.</li><li>Replace the lens cover by tucking the front lip under the front edge and pressing down firmly along its entire length until secure.  See Figure 7.</li></ol>';
    container.appendChild(mountingGuide);

    const fixtureLink = document.createElement('div');
    fixtureLink.innerHTML = '<span class="product-title">Connecting Multiple Fixtures Together:</span><br>';
    fixtureLink.innerHTML += 'Plug ends of end-to-end connector or interconnect linker wires into "OUT" power connection ports on adjacent fixtures. Fixture and connector ends are marked "IN" and "OUT". Be sure to route power in and out according to the markings. Up to 50 fixtures can be connected to a single power cord or to one hardwired fixture. Fixture can be installed so they are powered from an adjacent fixture by using the end-to-end connector included with the fixture or a 6", 12", 24" sized jumper cable.<br>';
    fixtureLink.innerHTML += '<img class="lrgimg" src="/product_images/uploaded_images/AQUCfigureC.jpg" alt="Linking Multiple AQUC Fixtures Together" /><br> <br>';
    container.appendChild(fixtureLink);

    const safetyMeasures = document.createElement('div');
    safetyMeasures.innerHTML = '<span class="product-title">Additional Safety Measures:</span><br>';
    safetyMeasures.innerHTML += '<ol><li>Do not look directly at LED light source.</li><li>Do not touch the LED diodes.</li><li>To avoid electrical shock, do not turn on the fixture with missing or damaged lens.</li><li>There are no serviceable parts inside the LED module.</li><li>The power cord and extension cables are not serviceable.  Inspect periodically and replace if damage is detected.</li><li><b>RISK OF FIRE:</b> Keep fixtures away from curtains and other combustable materials.</li><li>Suitable for indoor, dry locations only</li><li>This product is suitable for use in dimmable circuits.  For best results (100% dimming range), use a Lutron DV600P, DVCL-153P, DVEL-300P type dimmer switch.</li></ol>';
    container.appendChild(safetyMeasures);

    return container;
}

const installTab = document.querySelector('#Install');

if (installTab) {
    const tabPanelCheck = installTab.innerText.includes('Panel');

    if (tabPanelCheck) {
        const installTabContent = stripTags(installTab);

        if (installTabContent === 'AQUCinstructions') {
            const installGuide = installAQUC();
            clearTab(installTab);
            installTab.appendChild(installGuide);
        } else {
            clearTab(installTab);
            installTab.innerText = 'Coming Soon!';
        }
    }
}
