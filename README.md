**LinkedIn Bulk Invitation Withdrawal Automation Script #2024 Version**

Withdraw All Your LinkedIn Connection Invitations At Once With No Effort

Managing a large number of pending connection requests on LinkedIn can be a hassle. To help streamline this process, I've created an updated script for 2024 that automatically withdraws all your pending invitations. With this script, you can sit back and watch as the invitations are withdrawn without any manual clicking.

### How It Works

Just copy the content of the `linkedin-bulk-invitation-withdraw-script-2024.js` file, paste it into the Chrome developer console, press Enter, and let the script do the work for you.

### Steps to Use the Script

1. **Visit the Invitation Manager**:
   Open Chrome on your Mac or PC and navigate to [LinkedIn Invitation Manager - Sent](https://www.linkedin.com/mynetwork/invitation-manager/sent/).

2. **Open Developer Tools**:
   Right-click on the page, select **Inspect**, and switch to the **Console** tab.

3. **Paste and Run the Script**:
   Copy the script from `linkedin-bulk-invitation-withdraw-script-2024.js`, paste it into the console, and press Enter.

   ```javascript
   /*
   Developed by: Bahae Eddine HALIM
   Contact: https://www.linkedin.com/in/halimbahae/

   You are free to use this script anywhere with proper credit and contact info of the developer.
   */

   (function() {
       console.log("Started");
       var totalCount = 0;
       var timeoutInterval = 5000; // Set the timeout interval to 5000 milliseconds (5 seconds)

       function populateEls() {
           return document.querySelectorAll('.artdeco-modal__actionbar--confirm-dialog .artdeco-button--primary');
       }

       function runWithdraw() {
           var els = populateEls();
           console.log(els);
           var idx = 0;
           var len = els.length;

           function clickNextButton() {
               if (idx < len) {
                   var el = els[idx];
                   if (el) {
                       totalCount++;
                       console.log("running.. click " + totalCount);
                       el.click();
                       idx++;
                       setTimeout(clickNextButton, timeoutInterval); 
                   }
               } else {
                   console.log("Need to find new elems");
                   setTimeout(function() {
                       els = populateEls();
                       if (els.length === 0) {
                           console.log("..........Done");
                       } else {
                           console.log("Rerun withdraw...");
                           idx = 0;
                           len = els.length;
                           clickNextButton();
                       }
                   }, timeoutInterval); 
               }
           }

           clickNextButton();
       }

       runWithdraw();
   })();
   ```

4. **Re-run if Necessary**:
   If not all invitations are withdrawn, repeat the process.

## Additional Resources

- **GitHub Repository**: Find the script and additional resources on [GitHub](https://github.com/halimbahae/LinkedIn-Bulk-Invitation-Withdraw-Script).
- **Video Tutorial**: Watch a screencast demonstrating the method on [YouTube](https://youtube.com/shorts/jVsMTCHfq4s).

If you have any questions or run into any issues, feel free to contact me via [LinkedIn](https://www.linkedin.com/in/halimbahae/).

Happy networking!

Bahae Eddine HALIM

