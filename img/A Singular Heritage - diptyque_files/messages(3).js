define(
    [
        'Magento_Customer/js/customer-data',
        'underscore',
        'knockout'
    ],
    function (customerData, _, ko) {
        'use strict';

        var mixin = _.extend({
            notificationSectionName: 'ammessages',
            messagesObserver: {},
            staticMessages: {},
            initialize: function () {
                this._super();
                if (window.amasty_notice_disabled) {
                    return;
                }
                this.staticMessages = customerData.get(this.notificationSectionName);
                this.messagesObserver = this.messages;
                this.messages = ko.pureComputed(this.messagesMerger, this);
            },

            messagesMerger: function () {
                var messagesArr = this.messagesObserver(),
                    staticMessages = this.staticMessages(),
                    isAdded = false;

                if (_.isUndefined(messagesArr.messages)) {
                    messagesArr.messages = [];
                }
                if (_.isUndefined(staticMessages.messages)) {
                    return messagesArr;
                }

                if (!_.isUndefined(window.checkout)
                    && !_.isUndefined(window.checkout.websiteId)
                    && !_.isUndefined(staticMessages.website_id)
                    && staticMessages.website_id !== window.checkout.websiteId
                    || !_.isUndefined(window.checkout)
                    && !_.isUndefined(window.checkout.storeId)
                    && !_.isUndefined(staticMessages.store_id)
                    && staticMessages.store_id !== window.checkout.storeId
                ) {
                    customerData.reload([this.notificationSectionName], true);
                } else {
                    _.each(messagesArr.messages, function (message) {
                        if (_.isEqual(message, staticMessages.messages.notice)) {
                            isAdded = true;
                        }
                    });

                    if (!isAdded && staticMessages.messages.notice) {
                        messagesArr.messages.push(staticMessages.messages.notice);
                    }
                }

                return messagesArr;
            }
        });

        return function (target) {
            return target.extend(mixin);
        };
    }
);
