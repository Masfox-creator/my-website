function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';

    if (includeUppercase) {
        characters = uppercase;
    }
    if (includeNumbers) {
        if (characters) {
            characters += numbers;
        } else {
            characters = numbers;
        }
    }
    if (includeSymbols) {
        if (characters) {
            characters += symbols;
        } else {
            characters = symbols;
        }
    }

    // إذا لم يتم تحديد أي خيار، استخدم الحروف الصغيرة كإعداد افتراضي
    if (!characters) {
        characters = lowercase;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
}
