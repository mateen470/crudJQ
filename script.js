$(document).ready(function () {
  let i = 1;

  $("#btnAdd").click(function () {
    let newHtml = GetHtml()
      .replace("$[Id]", i++)
      .replace("$[Product]", $("#_name").val())
      .replace("$[Qunatity]", $("#_quantity").val())
      .replace("$[Price]", $("#_price").val())
      .replace("$[action]", "Edit")
      .replace("$[Delete]", "Delete");

    $("#table_td").append(newHtml);
  });

  $("#btnUpdate").click(function () {
    let newHtml = GetHtml()
      .replace("$[Id]", $("#_id").val())
      .replace("$[Product]", $("#_name").val())
      .replace("$[Qunatity]", $("#_quantity").val())
      .replace("$[Price]", $("#_price").val())
      .replace("$[action]", "Edit")
      .replace("$[Delete]", "Delete");

    $("#table_td").append(newHtml);

    $("#btnAdd").show();

    $("#btnUpdate").hide();

    $("#_id").val("");

    $("#_name").val("");

    $("#_quantity").val("");
    $("#_price").val("");
  });

  $(document).on("click", "#A_Edit", function () {
    $("#btnAdd").hide();

    $("#btnUpdate").show();

    $("#_id").show();

    $("#_id").val($(this).parent().parent().find(".Id").html());

    $("#_name").val($(this).parent().parent().find(".Product").html());

    $("#_quantity").val($(this).parent().parent().find(".Qunatity").html());
    $("#_price").val($(this).parent().parent().find(".Price").html());

    $(this).parents("tr").remove();

    $("#btnUpdate").focus();
  });

  $(document).on("click", "#A_delete", function () {
    $(this).parents("tr").remove();
  });
});

function GetHtml() {
  return (
    "<tr><td class='Id'>$[Id]</td>" +
    "<td class='Name'>$[Product]</td>" +
    "<td class='role'>$[Qunatity]</td>" +
    "<td class='rolex'>$[Price]</td>" +
    "<td class='action'><a href='#' id='A_Edit'> $[action] </a> <a href='#' id='A_delete'>$[Delete]</a></td></tr>"
  );
}
