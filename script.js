$(document).ready(function () {
    let i = 1;

    $("#btnAdd").click(function () {
      let newHtml = GetHtml()
        .replace("$[Id]", i++)
        .replace("$[Name]", $("#txtname").val())
        .replace("$[role]", $("#ddlRole").val())
        .replace("$[rolex]", $("#nme").val())
        .replace("$[action]", "Edit")
        .replace("$[Delete]", "Delete");

      $("#table_td").append(newHtml);
    });

    $("#btnUpdate").click(function () {
      let newHtml = GetHtml()
        .replace("$[Id]", $("#txtId").val())
        .replace("$[Name]", $("#txtname").val())
        .replace("$[role]", $("#ddlRole").val())
        .replace("$[rolex]", $("#nme").val())
        .replace("$[action]", "Edit")
        .replace("$[Delete]", "Delete");

      $("#table_td").append(newHtml);

      $("#btnAdd").show();

      $("#btnUpdate").hide();

      $("#txtId").val("");

      $("#txtname").val("");

      $("#ddlRole").val("");
      $("#nme").val("");
    });

    $(document).on("click", "#A_Edit", function () {
      $("#btnAdd").hide();

      $("#btnUpdate").show();

      $("#txtId").show();

      $("#txtId").val($(this).parent().parent().find(".Id").html());

      $("#txtname").val($(this).parent().parent().find(".Name").html());

      $("#ddlRole").val(
        $(this).parent().parent().find(".role").html()
      );
      $("#nme").val(
        $(this).parent().parent().find(".rolex").html()
      );

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
      "<td class='Name'>$[Name]</td>" +
      "<td class='role'>$[role]</td>" +
      "<td class='rolex'>$[rolex]</td>" +
      "<td class='action'><a href='#' id='A_Edit'> $[action] </a> <a href='#' id='A_delete'>$[Delete]</a></td></tr>"
    );
  }