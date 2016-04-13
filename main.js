/**
 * Created by Christopher on 4/12/2016.
 */
$(function() {

    var bar1 = {
        x: ["Aerobacter aerogenes", "Brucella abortus", "Brucella anthracis", "Diplococcus pneumoniae",
        "Escherichia coli", "Klebsiella pneumoniae", "Mycobacterium tuberculosis", "Proteus vulgaris",
        "Pseudomonas aeruginosa", "Salmonella typhosa", "Salmonella schottmuelleri",
        "Staphylococcus albus", "Staphylococcus aureus", "Streptococcus fecalis", "Streptococcus hemolyticus",
        "Streptococcus viridans"],
        y: [870, 1, 0.001, 0.005, 100, 850, 800, 3, 850, 1, 10, 0.007, 0.03, 1, 0.001, 0.005],
        type: 'bar',
        name: "Penicilin",
        marker: {
            color: "rgb(255, 0, 250)",
            opacity: 0.7
        }
    };

    var bar2 = {
        x: ["Aerobacter aerogenes", "Brucella abortus", "Brucella anthracis", "Diplococcus pneumoniae",
            "Escherichia coli", "Klebsiella pneumoniae", "Mycobacterium tuberculosis", "Proteus vulgaris",
            "Pseudomonas aeruginosa", "Salmonella typhosa", "Salmonella schottmuelleri",
            "Staphylococcus albus", "Staphylococcus aureus", "Streptococcus fecalis", "Streptococcus hemolyticus",
            "Streptococcus viridans"],
        y: [1, 2, 0.01, 11, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8, 0.1, 0.03, 1, 14, 10],
        type: 'bar',
        name: "Streptomycin",
        marker: {
            color: "rgb(0, 247, 250)",
            opacity: 0.7
        }
    };

    var bar3 = {
        x: ["Aerobacter aerogenes", "Brucella abortus", "Brucella anthracis", "Diplococcus pneumoniae",
            "Escherichia coli", "Klebsiella pneumoniae", "Mycobacterium tuberculosis", "Proteus vulgaris",
            "Pseudomonas aeruginosa", "Salmonella typhosa", "Salmonella schottmuelleri",
            "Staphylococcus albus", "Staphylococcus aureus", "Streptococcus fecalis", "Streptococcus hemolyticus",
            "Streptococcus viridans"],
        y: [1.6, 0.02, 0.007, 10, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09, 0.001, 0.001, 0.1, 10, 40],
        type: 'bar',
        name: "Neomycin",
        marker: {
            color: "rgb(25, 25, 250)",
            opacity: 0.7
        }
    };

    var data1 = [bar1, bar2, bar3];

    var layout1 = {
       title: "Effectiveness of different antibacterials",
        xaxis: {
            tickangle: 25
        },
        yaxis: {
            type: "log",
        },
        barmode: 'group'
    };

    Plotly.newPlot("Chart1", data1, layout1)

});