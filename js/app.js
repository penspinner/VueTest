
var app = new Vue
({
    el: '#app',
    
    data: 
    {
        message: 'Hello',
        seen: true,
        url: 'http://stevenliao.tech',
        firstName: 'Steven',
        lastName: 'Liao'
    },
    
    // Re-evaluated when dependencies change
    // Use computed when you want to cache
    computed:
    {
        fullName: 
        {
            get: function()
            {
                return this.firstName + ' ' + this.lastName;
            },
            
            // Example: app.fullName = 'Rick Astley' invokes this setter
            set: function(newName)
            {
                var nameSplit = newName.split(' ');
                this.firstName = nameSplit[0];
                this.lastName = nameSplit[nameSplit.length - 1];
            }
        }
    },
    
    // Method invocations always happen on re-renders
    // Use method when you don't want to cache
    methods: 
    {
        toggleSeen: function()
        {
            this.seen = !this.seen;
        }
    },
    
    // Methods that change data based on other data
    // It is usually better to use computed 
    watch:
    {
        
    },
    
    filters: 
    {
        uppercase: function(value)
        {
            if (!value) return "";
            return value.toUpperCase();
        },
        reverse: function(value)
        {
            if (!value) return "";
            return value.split('').reverse().join('');
        }
    }
});