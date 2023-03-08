const LiferayService = {
  get: async (url) => {
    if (typeof window['Liferay'] != 'undefined') {
      try {
        const response = await window['Liferay'].Util.fetch(url);
        const data = response.json();
        if (data.status) {
          window['Liferay'].Util.openToast({
            title: data.status,
            message: 'An error occured.',
            type: 'danger',
          });
        } else {
          return data;
        }
      } catch (error) {
        console.error(error);
        window['Liferay'].Util.openToast({
          message: 'An error occured.',
          type: 'danger',
        });
      }
    } else {
      console.error("Liferay (JS Object) doesn't exist.");
    }
  },
  post: (url, payload) => {
    if (typeof window['Liferay'] != 'undefined') {
      try {
        const response = window['Liferay'].Util.fetch(url, {
          body: JSON.stringify(payload),
          method: `POST`,
          headers: [['content-type', 'application/json']],
        });
        const data = response.json();
        if (data.status) {
          window['Liferay'].Util.openToast({
            title: data.status,
            message: 'An error occured.',
            type: 'danger',
          });
        } else {
          window['Liferay'].Util.openToast({
            title: 'Success',
            message: `Your request completed successfully.`,
            type: 'success',
          });
          return data;
        }
      } catch (error) {
        console.error(error);
        window['Liferay'].Util.openToast({
          message: 'An error occured.',
          type: 'danger',
        });
      }
    } else {
      console.error("Liferay (JS Object) doesn't exist.");
    }
  },
  patch: (url, payload) => {
    if (typeof window['Liferay'] != 'undefined') {
      try {
        const response = window['Liferay'].Util.fetch(url, {
          body: JSON.stringify(payload),
          method: `PATCH`,
          headers: [['content-type', 'application/json']],
        });
        const data = response.json();
        if (data.status) {
          window['Liferay'].Util.openToast({
            title: data.status,
            message: 'An error occured.',
            type: 'danger',
          });
        } else {
          window['Liferay'].Util.openToast({
            title: 'Success',
            message: `Your request completed successfully.`,
            type: 'success',
          });
          return data;
        }
      } catch (error) {
        console.error(error);
        window['Liferay'].Util.openToast({
          message: 'An error occured.',
          type: 'danger',
        });
      }
    } else {
      console.error("Liferay (JS Object) doesn't exist.");
    }
  },
  delete: async (url) => {
    if (typeof window['Liferay'] != 'undefined') {
      try {
        const response = await window['Liferay'].Util.fetch(url, {
          method: `DELETE`,
        });
        const data = response.json();
        if (data.status) {
          window['Liferay'].Util.openToast({
            title: data.status,
            message: 'An error occured.',
            type: 'danger',
          });
        } else {
          window['Liferay'].Util.openToast({
            title: 'Success',
            message: `Your request completed successfully.`,
            type: 'success',
          });
          return data;
        }
      } catch (error) {
        console.error(error);
        window['Liferay'].Util.openToast({
          message: 'An error occured.',
          type: 'danger',
        });
      }
    } else {
      console.error("Liferay (JS Object) doesn't exist.");
    }
  },
};

export default LiferayService;
