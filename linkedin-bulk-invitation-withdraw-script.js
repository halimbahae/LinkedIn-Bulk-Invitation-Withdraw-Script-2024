/*
Developed by: Bahae Eddine HALIM
Contact: https://www.linkedin.com/in/halimbahae/

You are free use this sceript anywhere with proper mentioning proper credit and contact info of the developer.

*/

// open this page https://www.linkedin.com/mynetwork/invitation-manager/sent/ and paste the script in the console and press enter to see the automation magic to withdrawn pending invitations. If all invitations are not withdrawal then repeat the process

(function() {
    const max_limit = undefined; // to specify max number of invitations to withdraw or define undefined for all
    var getInvitations = () => {
        var withdrawInvitationContainers = document.querySelectorAll("div.invitation-card__action-container");
        return withdrawInvitationContainers;
    }

    var removeInvitations = async () => {
        let invitations = getInvitations();
        let counter = 0;
        for (let invitation of invitations) {
            if (max_limit !== undefined && counter >= max_limit) return;
            const actionButton = invitation.querySelector(
                'button.invitation-card__action-btn',
            )
            console.log(actionButton.getAttribute('aria-label'));
            await new Promise((resolve) => {
                actionButton.click();
                var intervalId = setInterval(() => {
                    if (document.querySelector('[data-test-modal-container] > [data-test-modal] [data-test-dialog-primary-btn]')) {
                        clearInterval(intervalId);
                        document.querySelector('[data-test-modal-container] > [data-test-modal] [data-test-dialog-primary-btn]').click();
                        setTimeout(resolve, 5000); // Set the timeout interval to 5000 milliseconds (5 seconds) : ( you can change it )
                    }
                })
            });
            counter++;
        }
        console.log(`-----------------------Withdraw invitation script completed-----------------------`);
        console.log(`-----------------------${invitations.length} pending invitation withdrawn-------------------------------`);
    }
    removeInvitations();
})();
