const axios = require('axios');

class SmsPool {
    constructor(apiKey) {
        if (!apiKey) {
            throw new Error('API key is required');
        }
        this.apiKey = apiKey;
    }

    //information fonksiyonlari
    async getBalance() {
        const url = 'https://api.smspool.net/request/balance';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const data = {
            key: this.apiKey
        };

        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async getSuccessRate(service) {
        const url = 'https://api.smspool.net/request/success_rate';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const data = new URLSearchParams({ service });
    
        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async getSuggestedCountries(service) {
        const url = `https://api.smspool.net/request/suggested_countries?service=${service}`;
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
    
        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
    
    async getCountryList() {
        const url = 'https://api.smspool.net/country/retrieve_all';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
    
        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async getServiceList(country) {
        const url = `https://api.smspool.net/service/retrieve_all?country=${country}`;
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
    
        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    // Bu fonksiyonlar, belirtilen parametrelerle bir SMS siparişi oluşturur veya kontrol eder.
    async orderSms(options) {
        const url = 'https://api.smspool.net/purchase/sms';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const data = {
            key: this.apiKey,
            ...options
        };

        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async checkSms(orderId) {
        const url = 'https://api.smspool.net/sms/check';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const data = {
            key: this.apiKey,
            orderid: orderId
        };

        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async cancelSms(orderId) {
        const url = 'https://api.smspool.net/sms/cancel';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const data = {
            key: this.apiKey,
            orderid: orderId
        };
    
        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async getActiveOrders() {
        const url = 'https://api.smspool.net/request/active';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const data = {
            key: this.apiKey
        };
    
        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async checkResend(orderId) {
        const url = 'https://api.smspool.net/sms/check_resend';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const data = {
            key: this.apiKey,
            orderid: orderId
        };
    
        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async resendSms(orderId) {
        const url = 'https://api.smspool.net/sms/resend';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const data = {
            key: this.apiKey,
            orderid: orderId
        };
    
        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async getOrderHistory(start, length, search) {
        const url = 'https://api.smspool.net/request/history';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
        const data = {
            key: this.apiKey,
            start: start,
            length: length,
            search: search
        };
    
        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    //Quick Price
    async getPricing(country) {
        const url = 'https://api.smspool.net/request/pricing';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const data = new URLSearchParams({ country });
    
        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async getPriceAndSuccessRate(country, service) {
        const url = 'https://api.smspool.net/request/price';
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const data = new URLSearchParams({ country, service });
    
        try {
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
}

module.exports = SmsPool;
