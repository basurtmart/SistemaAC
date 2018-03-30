﻿// Write your JavaScript code.
$('#modalEditar').on('shown.bs.modal', function () {
    $('#myInput').focus()
})

function getUsuario(id, action) {
    $.ajax(
        {
            type: "POST",
            url: action,
            data: { id },
            success: function (response) {
                mostrarUsuario(response);
            }
        });
}

var items;
// Variables globales para cada propiedad del usuario 
var id;
var userName;
var email;
var phoneNumber;

// Otras variables donde almacenaremos los datos del registro, pero estos datos no serán modificados
var accessFailedCount;
var concurrencyStamp;
var emailConfirmed;
var lockoutEnabled;
var lockoutEnd;
var normalizedUserName;
var normalizedEmail;
var passwordHash;
var phoneNumberConfirmed;
var securityStamp;
var twoFactorEnabled;

function mostrarUsuario(response) {
    items = response;
    $.each(items, function (index, val) {
        $('input[name=Id]').val(val.id);
        $('input[name=UserName]').val(val.userName);
        $('input[name=Email]').val(val.email);
        $('input[name=PhoneNumber]').val(val.phoneNumber);
    });
}

function editarUsuario(action) {
    // Obtenemos los datos del input respectivo del formulario 
    id = $('input[name=Id')[0].value;
    email = $('input[name=Email]')[0].value;
    phoneNumber = $('input[name=PhoneNumber')[0].value;

    $.each(items,
        function (index, val) {
            accessFailedCount = val.accessFailedCount;
            concurrencyStamp = val.concurrencyStamp;
            emailConfirmed = val.emailConfirmed;
            lockoutEnabled = val.lockoutEnabled;
            lockoutEnd = val.lockoutEnd;
            userName = val.userName;
            normalizedUserName = val.normalizedUserName;
            normalizedEmail = val.normalizedEmail;
            passwordHash = val.passwordHash;
            phoneNumberConfirmed = val.phoneNumberConfirmed;
            securityStamp = val.securityStamp;
            twoFactorEnabled = val.twoFactorEnabled;
        });
    $.ajax({
        type: "POST",
        url: action,
        data: {
            id, userName, email, phoneNumber, accessFailedCount,
            concurrencyStamp, emailConfirmed, lockoutEnabled, lockoutEnd,
            normalizedUserName, normalizedEmail, passwordHash, phoneNumberConfirmed,
            securityStamp, twoFactorEnabled
        },
        success: function (responce) {
            if (responce == "Save") {
                window.localtion.href = "Usuarios";
            } else {
                alert("No se puede editar los datos del usuario");
            }
        }
    });
}