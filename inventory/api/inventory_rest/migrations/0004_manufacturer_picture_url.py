# Generated by Django 5.0.7 on 2024-07-24 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("inventory_rest", "0003_alter_vehiclemodel_picture_url"),
    ]

    operations = [
        migrations.AddField(
            model_name="manufacturer",
            name="picture_url",
            field=models.URLField(blank=True, null=True),
        ),
    ]
