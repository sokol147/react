$(document).ready(function() {
    // пример валидации и отправки формы ajax
    $("#form").validationEngine('attach', {
        //отображение стрелки возле подсказоки
        showArrow: false,
        //отображение стрелки возле подсказоки радио и чекбокс
        showArrowOnRadioAndCheckbox: false,
        //установливает позицию для показа подсказок о ошибках
        promptPosition: "topRight",
        //сколл к ошибочному инпуту
        scroll: false,
        //показывать ошибку только для первого поля
        showOneMessage: true,
        //фокус на первом поле
        focusFirstField: false,
        //обновление позиции подсказки при резайзе окна
        autoPositionUpdate: true,
        onValidationComplete: function(form, status) { // Когда валидация включена и сканирование формы завершено
            if (status == true) {
                $.ajax({
                        type: form.attr('method'),
                        url: form.attr('action'),
                        cache: false,
                        data: form.serialize(), //отправляем собранные данные полей
                    })
                    .done(function(answer) {
                        console.log("Отправлено");
                        form[0].reset(); //очищаем форму после отправки
                        $('#answer').html(answer);
                    })
                    .fail(function() {
                        console.log("Ошибка отправки");
                    })
                    .always(function() {
                        console.log("Всегда");
                    });
            } else {
                console.log("Ошибка валидации");
            }
        }
    });
    $('.phone').mask("+375-99-999-99-99"); // маска для полей ввода
});
