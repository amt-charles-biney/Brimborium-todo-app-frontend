import OneSignal from "react-onesignal";

/**
 * Initializes the OneSignal service, associates it with a user ID, and prompts the user to enable push notifications.
 *
 * @async
 * @function
 * @param {string} userId - The unique user identifier for associating with OneSignal.
 * @returns {Promise<void>} A promise that resolves when the initialization is complete.
 * @throws {Error} If initialization fails or an error occurs.
 */
export default async function runOneSignal(userId: string): Promise<void> {
  /**
   * Initializes the OneSignal service with the provided configuration.
   *
   * @async
   * @function
   * @param {Object} config - The OneSignal configuration.
   * @param {string} config.appId - The OneSignal App ID.
   * @param {boolean} [config.allowLocalhostAsSecureOrigin=false] - Whether to allow localhost as a secure origin.
   * @throws {Error} If initialization fails or an error occurs.
   */
  await OneSignal.init({
    appId: import.meta.env.VITE_ONESIGNAL_APPID,
    allowLocalhostAsSecureOrigin: false,
  });

  /**
   * Prompts the user to enable push notifications using a slideDown dialog.
   *
   * @function
   */
  OneSignal.Slidedown.promptPush();

  /**
   * Associates the OneSignal service with a specific user.
   *
   * @function
   * @param {string} userId - The unique user identifier for associating with OneSignal.
   */
  OneSignal.login(userId);
}

