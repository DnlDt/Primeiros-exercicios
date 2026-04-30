let relatorio_pf, relatorio_pj, tempo_pf,tempo_pj, valor_total_pf, valor_total_pj,qtd_total_relatorios,tempo_total_trabalhado, valor_total_recebido, media_valor_relatorio_pf, media_valor_relatorio_pj
let mediatempogasto_pf, mediatempogasto_pj
relatorio_pf = Number(prompt("Relatorios PF:"))
relatorio_pj = Number(prompt("Relatórios PJ:"))
tempo_pf = Number(prompt("Tempo para elaborar relatórios PF:"))
tempo_pj = Number(prompt("Tempo para elaborar relatórios PJ:"))
valor_total_pf = Number(prompt("Valor recebido relatorios PF:"))
valor_total_pj = Number(prompt("Valor recebido relatorios PJ:"))
qtd_total_relatorios = relatorio_pf + relatorio_pj
tempo_total_trabalhado = tempo_pf + tempo_pj
valor_total_recebido = valor_total_pf + valor_total_pj
media_valor_relatorio_pf = valor_total_pf /relatorio_pf
media_valor_relatorio_pj = valor_total_pj / relatorio_pj
mediatempogasto_pf = tempo_pf / relatorio_pf
mediatempogasto_pj = tempo_pj / relatorio_pj
alert("Quantidade total de relatorios: " +qtd_total_relatorios)
alert("Tempo total trabalhado: " + tempo_total_trabalhado)
alert("Valor total recebido: " + valor_total_recebido)
alert("Média de valor recebido por relatórios PF: " + media_valor_relatorio_pf.toFixed(2))
alert("Média de valor recebido por relatórios PJ: " + media_valor_relatorio_pj.toFixed(2))
alert("Média tempo gasto por relatórios PF:" + mediatempogasto_pf.toFixed(2))
alert("Média tempo gasto relatórios PJ:" + mediatempogasto_pj.toFixed(2))