{% if messages %}
{% for message in messages %}
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            // Create an array to hold messages
            var messages = [];

                // Push each message into the array
                messages.push({
                    'tag': '{{ message.tags|escapejs }}',
                    'text': '{{ message|escapejs }}'
                });

            // Iterate through the messages array and display SweetAlert for errors
            messages.forEach(function(message) {
                if (message.tag === 'error') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: message.text,
                        confirmButtonColor: '#3085d6'
                    });
                } else if (message.tag === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: message.text,
                        timer: 3000,
                        showConfirmButton: false
                    });
                } else if (message.tag === 'info') {
                    Swal.fire({
                        icon: 'info',
                        title: 'Note:',
                        text: message.text,
                        timer: 3000,
                        showConfirmButton: false
                    });
                }
            });
        });
    </script>
    {% endfor %}
{% endif %}